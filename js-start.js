// загрузка изображений lazy-load
const imgElements = document.querySelectorAll('img[data-src]');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            const tempImg = new Image();
            tempImg.src = img.dataset.src;
            tempImg.onload = () => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            };
            observer.unobserve(img);
        }
    });
});

imgElements.forEach(img => {
    observer.observe(img);
});

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

// кнопка вверх
const sectionB = document.querySelector('section.b');

window.addEventListener('scroll', () => {
    if (scrollY >= 500) {
        sectionB.classList.add('x'); // скроллим вниз
    } else {
        sectionB.classList.remove('x'); // скроллим вверх
    }
});
