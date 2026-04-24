// скролл

const sectionG = document.querySelector('section.g');
const sectionK = document.querySelector('section.k');

const maxScroll = 80; // сколько px = полная темнота

window.addEventListener('scroll', () => {
    // получаем скоролл от вверха
    const scrollY = window.scrollY;

    // прогресс от 1 до 0
    let opacity = 1 - (scrollY / maxScroll);

    // ограничиваем, чтобы не вылезало
    opacity = Math.min(Math.max(opacity, 0), 1);

    // вешаем style на тег
    sectionG.style.opacity = opacity;
    sectionK.style.opacity = opacity;
});
