// Minimal confetti library loader for browser
// This will load the canvas-confetti library from CDN if not already loaded
(function(){
  if (window.confetti) return;
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
  script.async = true;
  document.head.appendChild(script);
})();
