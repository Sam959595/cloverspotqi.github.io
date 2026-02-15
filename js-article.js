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
const sectionF = document.querySelector('section.f');
const sectionW = document.querySelector('section.w');

sectionW.addEventListener('scroll', () => {
    let scrollY = sectionW.scrollTop;

    if (scrollY >= 200) {
        sectionF.classList.add('g');
    } else {
        sectionF.classList.remove('g');
    }
});

// затенить бар
let n = 0;
const b = document.querySelector('section.j');
const e = document.querySelector('section.w');

e.addEventListener('scroll', () => {
    let t = e.scrollTop;

    if (t > n) {
        b.classList.add('x'); // скроллим вниз
    } else {
        b.classList.remove('x'); // скроллим вверх
    }

    n = t <= 0 ? 0 : t;
});

// поиск бар
const sectionC = document.querySelector('section.c');
const sectionV = document.querySelector('section.v');

const sectionB = document.querySelector('section.b');
const sectionE = document.querySelector('section.e');
const sectionEQ = document.querySelector('section.e .b');

sectionC.onclick = () => {
    sectionV.classList.toggle('s')
};

sectionB.onclick = () => {
    sectionE.classList.add('q')
};

sectionEQ.onclick = () => {
    sectionE.classList.remove('q')
};
