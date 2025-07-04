// Simple confetti animation using canvas
// Usage: call launchConfetti() to trigger
export function launchConfetti() {
  const duration = 1.2 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  const interval = setInterval(function() {
    if (Date.now() > animationEnd) {
      clearInterval(interval);
      return;
    }
    const particleCount = 30 * (duration / 1000);
    window.confetti && window.confetti({
      particleCount,
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      origin: { y: 0.6 },
      ...defaults
    });
  }, 200);
}
