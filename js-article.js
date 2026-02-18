// Маленькая утилита для удобства
const $ = (selector, all = false) => all ? document.querySelectorAll(selector) : document.querySelector(selector);

// DOM-элементы ищутся только один раз при загрузке страницы (а потом используются из памяти)
const imgElements = $('img[data-src]', true);

// Загрузка изображений lazy-load
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

const sectionW = document.querySelector('section.w');

// Скролл
const sectionF = document.querySelector('section.f');

sectionW.addEventListener('scroll', () => {
    let scrollY = sectionW.scrollTop;

    if (scrollY >= 100) {
        sectionF.classList.add('g');
    } else {
        sectionF.classList.remove('g');
    }
});

// затенить бар
let n = 0;
const b = document.querySelector('section.j');

sectionW.addEventListener('scroll', () => {
    let t = sectionW.scrollTop;

    if (t > n) {
        b.classList.add('x'); // скроллим вниз
    } else {
        b.classList.remove('x'); // скроллим вверх
    }

    n = t <= 0 ? 0 : t;
});

// Скролл
const bx = document.querySelector('section.j svg');
const gx = document.querySelector('section.j .b');

const maxScroll = 150; // сколько px = полная темнота

sectionW.addEventListener('scroll', () => {
    // получаем скоролл от вверха
    const scrollY = sectionW.scrollTop;

    // прогресс от 1 до 0
    let opacity = 1 - (scrollY / maxScroll);

    // ограничиваем, чтобы не вылезало
    opacity = Math.min(Math.max(opacity, 0), 1);

    // вешаем style на тег
    bx.style.opacity = opacity;
    gx.style.opacity = opacity;
});

// поиск бар
const sectionWw = document.querySelectorAll('section.w img');
const sectionV = document.querySelector('section.v');

sectionWw.forEach(img => {
    img.addEventListener('click', () => {
        sectionV.classList.toggle('s');
    });
});

// переключение вкладок
const tabs = document.querySelectorAll('section.j .a h6');
const sectionB = document.querySelector('section.b');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {

        // убрать активный класс у всех вкладок
        tabs.forEach(t => t.classList.remove('s'));

        // добавить активный класс текущей
        tab.classList.add('s');

        // переключение секций
        if (index === 0) {
            sectionW.style.display = "block";
            sectionB.style.display = "none";
        } else {
            sectionW.style.display = "none";
            sectionB.style.display = "block";
        }
    });
});
