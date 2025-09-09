const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
const navLinks = nav.querySelectorAll('a'); // todos los enlaces del menú

// abrir/cerrar menú al pulsar hamburguesa
toggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// cerrar menú al pulsar un enlace
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
});

contactForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Evita recargar la página

  // Para usar mailto o Formspree, dejamos que se envíe después
  this.submit();

  // Mostrar mensaje de éxito
  successMessage.style.display = 'block';

  // Limpiar formulario después de 3 segundos
  setTimeout(() => {
    successMessage.style.display = 'none';
    contactForm.reset();
  }, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
  const logoBtn = document.getElementById('logoBtn');
  const gameContainer = document.getElementById('gameContainer');
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext("2d");

  let gameStarted = false;
  let animationId;

  const logoGame = new Image();
  logoGame.src = "logo.png";

  let x = 100, y = 100, dx = 3, dy = 2, logoSize = 60;

  function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(logoGame, x, y, logoSize, logoSize);

    x += dx;
    y += dy;

    if (x + logoSize > canvas.width || x < 0) dx = -dx;
    if (y + logoSize > canvas.height || y < 0) dy = -dy;

    animationId = requestAnimationFrame(draw);
  }

  function stopGame() {
    cancelAnimationFrame(animationId);
    gameStarted = false;
    gameContainer.style.display = "none";
  }

  // Pulsar el logo abre o cierra el juego
  logoBtn.addEventListener('click', () => {
    if (!gameStarted) {
      gameContainer.style.display = "block";
      draw();
      gameStarted = true;
    } else {
      stopGame();
    }
  });
});