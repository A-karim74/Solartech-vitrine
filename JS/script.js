// Dark Mode Toggle - Hero Button
const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Récupère le thème sauvegardé ou système
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    html.dataset.theme = 'dark';
    toggle.textContent = 'Light';
} else {
    html.dataset.theme = 'light';
    toggle.textContent = 'Dark';
}

// Événement clic
toggle.addEventListener('click', () => {
    if (html.dataset.theme === 'light') {
        html.dataset.theme = 'dark';
        toggle.textContent = 'Light';
        localStorage.setItem('theme', 'dark');
    } else {
        html.dataset.theme = 'light';
        toggle.textContent = 'Dark';
        localStorage.setItem('theme', 'light');
    }
});