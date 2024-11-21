// Smooth Scroll para seções da página
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

// Função para redirecionar ao próximo projeto
function redirectToNextProject(url) {
    window.location.href = url;
}

// Evento para o botão da seção "O Recomeço"
const reconciliationButton = document.querySelector('#reconciliation button');
if (reconciliationButton) {
    reconciliationButton.addEventListener('click', () => {
        redirectToNextProject('quiz.html'); // Substitua "quiz.html" pelo caminho correto do próximo projeto, se necessário.
    });
}

// Animação de exibição das seções ao rolar a página
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.3
});

sections.forEach(section => {
    observer.observe(section);
});

// Evento de carregamento inicial
window.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada. Scripts funcionando corretamente.');
});

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

// Redirecionamento para "Nossa História"
const redirectButton = document.querySelector('.letter-section button');
if (redirectButton) {
    redirectButton.addEventListener('click', () => {
        window.location.href = 'story.html';
    });
}

