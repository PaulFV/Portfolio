# Minimaler statischer Dateiserver für die lokale Vorschau.
# Nur zum Prüfen dieser Website gedacht — bindet ausschließlich an localhost.
param(
  [string]$Root = ".",
  [int]$Port = 8123
)

$ErrorActionPreference = "Stop"
$Root = (Resolve-Path -LiteralPath $Root).Path

$types = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "text/javascript; charset=utf-8"
  ".svg"  = "image/svg+xml"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".webp" = "image/webp"
  ".ico"  = "image/x-icon"
  ".json" = "application/json"
  ".md"   = "text/plain; charset=utf-8"
  ".txt"  = "text/plain; charset=utf-8"
}

$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $Port)
$listener.Start()
Write-Host "Serving $Root at http://localhost:$Port/"

while ($true) {
  $client = $listener.AcceptTcpClient()
  try {
    $stream = $client.GetStream()
    $stream.ReadTimeout = 5000
    $reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::ASCII, $false, 4096, $true)

    $requestLine = $reader.ReadLine()
    if (-not $requestLine) { $client.Close(); continue }

    # Restliche Header verwerfen
    while ($true) {
      $line = $reader.ReadLine()
      if ($null -eq $line -or $line -eq "") { break }
    }

    $parts = $requestLine -split "\s+"
    $target = if ($parts.Length -ge 2) { $parts[1] } else { "/" }
    $target = ($target -split "\?")[0]
    $target = [System.Uri]::UnescapeDataString($target)
    if ($target.EndsWith("/")) { $target += "index.html" }

    $relative = $target.TrimStart("/").Replace("/", [System.IO.Path]::DirectorySeparatorChar)
    $full = [System.IO.Path]::GetFullPath((Join-Path $Root $relative))

    $status = "200 OK"
    $body = $null
    $ctype = "application/octet-stream"

    # Ausbruch aus dem Wurzelverzeichnis verhindern
    if (-not $full.StartsWith($Root, [System.StringComparison]::OrdinalIgnoreCase)) {
      $status = "403 Forbidden"
      $body = [System.Text.Encoding]::UTF8.GetBytes("403 Forbidden")
      $ctype = "text/plain; charset=utf-8"
    }
    elseif (Test-Path -LiteralPath $full -PathType Leaf) {
      $body = [System.IO.File]::ReadAllBytes($full)
      $ext = [System.IO.Path]::GetExtension($full).ToLowerInvariant()
      if ($types.ContainsKey($ext)) { $ctype = $types[$ext] }
      Write-Host "200 $target"
    }
    else {
      $status = "404 Not Found"
      $body = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $target")
      $ctype = "text/plain; charset=utf-8"
      Write-Host "404 $target"
    }

    $header = "HTTP/1.1 $status`r`nContent-Type: $ctype`r`nContent-Length: $($body.Length)`r`nCache-Control: no-store`r`nConnection: close`r`n`r`n"
    $hb = [System.Text.Encoding]::ASCII.GetBytes($header)
    $stream.Write($hb, 0, $hb.Length)
    $stream.Write($body, 0, $body.Length)
    $stream.Flush()
    $reader.Dispose()
  }
  catch {
    Write-Host "Fehler: $($_.Exception.Message)"
  }
  finally {
    $client.Close()
  }
}
