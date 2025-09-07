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