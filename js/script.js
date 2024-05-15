document.addEventListener("DOMContentLoaded", function () {
  const particleContainer = document.querySelector(".boxes");

  const createParticle = () => {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * window.innerWidth + "px";
    particle.style.top = Math.random() * window.innerHeight + "px";
    particle.style.animationDuration = Math.random() * 5 + 5 + "s";
    particleContainer.appendChild(particle);

    particle.addEventListener("animationend", () => {
      particle.remove();
    });
  };

  const spawnParticles = () => {
    setInterval(createParticle, 0);
  };

  spawnParticles();
});

/*--------text animation--------*/

const txts = document.querySelector(".title").children,
  txtsLen = txts.length;
let index = 0;
const textInTimer = 3000,
  textOutTimer = 2800;

function animateText() {
  for (let i = 0; i < txtsLen; i++) {
    txts[i].classList.remove("text-in", "text-out");
  }
  txts[index].classList.add("text-in");

  setTimeout(function () {
    txts[index].classList.add("text-out");
  }, textOutTimer);

  setTimeout(function () {
    if (index == txtsLen - 1) {
      index = 0;
    } else {
      index++;
    }
    animateText();
  }, textInTimer);
}

window.onload = animateText;
