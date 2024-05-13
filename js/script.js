document.addEventListener("DOMContentLoaded", function () {
  const particleContainer = document.querySelector(".boxes");

  const createParticle = () => {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * window.innerWidth + "px";
    particle.style.top = Math.random() * window.innerHeight + "px";
    particle.style.animationDuration = Math.random() * 4 + 1 + "s";
    particleContainer.appendChild(particle);

    particle.addEventListener("animationend", () => {
      particle.remove();
    });
  };

  const spawnParticles = () => {
    setInterval(createParticle, 500);
  };

  spawnParticles();
});
