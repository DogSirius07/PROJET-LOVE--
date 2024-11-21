// Navegação suave entre seções
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Redirecionamento para a próxima página
const button = document.querySelector('.story-section button');
if (button) {
    button.addEventListener('click', () => {
        window.location.href = 'letter.html'; // Caminho para a próxima página
    });
}
