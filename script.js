// Typing animation
const message = "Dear Papa, you are my strength, my guide, and my greatest blessing. Happy Birthday Papa❤️❤️!";
let i = 0;
const target = document.createElement("p");
target.id = "message";
document.querySelector(".container").appendChild(target);

function typeMessage() {
  if (i < message.length) {
    target.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeMessage, 100);
  }
}
typeMessage();

function playMusic() {
  const music = document.getElementById("bg-music");
  music.play();
}

// Confetti animation
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];
for (let i = 0; i < 150; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 100,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    tilt: Math.random() * 10 - 10
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(p => {
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });
  updateConfetti();
}

function updateConfetti() {
  confetti.forEach(p => {
    p.y += Math.cos(p.d) + 1 + p.r / 2;
    p.x += Math.sin(p.d);
    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  });
}

setInterval(drawConfetti, 20);
