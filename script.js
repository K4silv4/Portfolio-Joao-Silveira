const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

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