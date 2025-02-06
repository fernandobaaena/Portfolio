const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

const elemento = document.querySelector(".welcome-text");
    const texto = '¡Bienvenido/a a mi Portfolio!';

    function efectoTextTyping(elemento, texto, i = 0) {
        if (i < texto.length) {
            elemento.textContent += texto[i];
            setTimeout(() => efectoTextTyping(elemento, texto, i + 1), 100);
        }
    }

    efectoTextTyping(elemento, texto);

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});