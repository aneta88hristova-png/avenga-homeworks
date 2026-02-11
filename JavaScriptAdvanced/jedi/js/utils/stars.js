export function createStars(containerId, count) {
  const starsContainer = document.getElementById(containerId);
  if (!starsContainer) return;
  
  starsContainer.innerHTML = '';
  
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    const size = Math.random() * 3;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = 2 + Math.random() * 4;
    const delay = Math.random() * 2;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;

    starsContainer.appendChild(star);
  }
}