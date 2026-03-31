// Gerenciador de tema (Dark/Light Mode)

// Obter o tema salvo no localStorage ou usar dark como padrão
const savedTheme = localStorage.getItem('theme') || 'dark';

// Aplicar tema ao carregar a página
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}

// Atualizar ícone do botão conforme o tema
function updateThemeIcon(theme) {
    const button = document.getElementById('theme-toggle');
    if (button) {
        button.querySelector('.theme-icon').textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Alternar entre temas
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

// Aplicar tema salvo ao carregar a página
applyTheme(savedTheme);

// Adicionar event listener ao botão de toggle
const themeToggleButton = document.getElementById('theme-toggle');
if (themeToggleButton) {
    themeToggleButton.addEventListener('click', toggleTheme);
}
