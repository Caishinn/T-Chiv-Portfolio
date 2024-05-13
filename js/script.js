document.addEventListener("DOMContentLoaded", function () {
  const particleContainer = document.querySelector(".boxes");

  const createParticle = () => {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * window.innerWidth + "px";
    particle.style.top = Math.random() * window.innerHeight + "px";
    particle.style.animationDuration = Math.random() * 12.5 + 12.5 + "s";
    particleContainer.appendChild(particle);

    particle.addEventListener("animationend", () => {
      particle.remove();
    });
  };

  const spawnParticles = () => {
    setInterval(createParticle, 250);
  };

  spawnParticles();
});
