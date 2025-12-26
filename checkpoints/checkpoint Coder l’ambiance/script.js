const themeToggle = document.getElementById('theme-toggle');
const icon = document.querySelector('.theme-switcher .icon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    // Changer l'icône dans le switch
    if(document.body.classList.contains('dark-theme')){
        icon.textContent = '😴';
    } else {
        icon.textContent = '🤪';
    }
});
