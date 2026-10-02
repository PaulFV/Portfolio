/* Small progressive enhancements. All content remains usable without JS. */
(function () {
  'use strict';
  var progress = document.querySelector('.reading-progress');
  var pending = false;
  function updateProgress() {
    var range = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.transform = 'scaleX(' + (range > 0 ? Math.min(1, window.scrollY / range) : 0) + ')';
    pending = false;
  }
  window.addEventListener('scroll', function () {
    if (!pending) { pending = true; window.requestAnimationFrame(updateProgress); }
  }, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();
  var button = document.querySelector('[data-logo-pause]');
  var track = document.querySelector('[data-stack-track]');
  if (button && track) button.addEventListener('click', function () {
    var paused = button.getAttribute('aria-pressed') !== 'true';
    button.setAttribute('aria-pressed', String(paused));
    track.classList.toggle('is-paused', paused);
  });
})();
