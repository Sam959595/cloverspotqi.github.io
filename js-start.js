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

// Скролл
const sectionA = document.querySelector('section.a');
const sectionF = document.querySelector('section.f');

sectionA.addEventListener('scroll', () => {
    let scrollY = sectionA.scrollTop;

    if (scrollY >= 100) {
        sectionF.classList.add('g');
    } else {
        sectionF.classList.remove('g');
    }
});

// затенить бар
let n = 0;
const b = document.querySelector('section.j');

sectionA.addEventListener('scroll', () => {
    let t = sectionA.scrollTop;

    if (t > n) {
        b.classList.add('x'); // скроллим вниз
    } else {
        b.classList.remove('x'); // скроллим вверх
    }

    n = t <= 0 ? 0 : t;
});

// поиск бар
const sectionAw = document.querySelectorAll('section.w img');
const sectionV = document.querySelector('section.v');

sectionAw.forEach(img => {
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
            sectionA.style.display = "block";
            sectionB.style.display = "none";
        } else {
            sectionA.style.display = "none";
            sectionB.style.display = "block";
        }
    });
});

// текущая дата

const sectionH = document.querySelector('section.a h2');
sectionH.textContent = new Intl.DateTimeFormat('ru-RU', { weekday: 'short', day: 'numeric', month: 'long' }).format(new Date()).toUpperCase();
