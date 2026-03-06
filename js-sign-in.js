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

// текущая дата

const sectionH = document.querySelector('section.a h2');
sectionH.textContent =
new Intl.DateTimeFormat('ru-RU', { weekday:'short', day:'numeric', month:'long' })
.format(new Date()).toUpperCase();

// Скролл
const sectionF = document.querySelector('section.f');
const divZ = document.querySelector('div.z');

divZ.addEventListener('scroll', () => {
    let scrollY = divZ.scrollTop;

    if (scrollY >= 600) {
        sectionF.classList.add('g');
    } else {
        sectionF.classList.remove('g');
    }
});

// поиск бар
const sectionC = document.querySelector('section.c');
const sectionV = document.querySelector('section.v');
const sectionR = document.querySelector('section.r');

const sectionB = document.querySelector('section.b');
const sectionE = document.querySelector('section.e');
const sectionEQ = document.querySelector('section.e>svg');

sectionC.onclick = () => {
    sectionV.classList.add('s')
    sectionR.classList.add('s')
};

sectionR.onclick = () => {
    sectionV.classList.remove('s')
    sectionR.classList.remove('s')
};

sectionB.onclick = () => {
    sectionE.classList.add('q')
};

sectionEQ.onclick = () => {
    sectionE.classList.remove('q')
};
