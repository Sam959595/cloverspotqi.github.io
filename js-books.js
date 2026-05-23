// маленькая утилита для удобства
const $ = (selector, all = false) => all ? document.querySelectorAll(selector) : document.querySelector(selector);

// DOM-элементы ищутся только один раз при загрузке страницы (а потом используются из памяти)
const imgElements = $('img[data-src]', true);

// загрузка изображений lazy-load
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

// скролл
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
const b = document.querySelector('section.j div');

sectionW.addEventListener('scroll', () => {
    let t = sectionW.scrollTop;

    if (t > n) {
        b.classList.add('x'); // скроллим вниз
    } else {
        b.classList.remove('x'); // скроллим вверх
    }

    n = t <= 0 ? 0 : t;
});

// скролл
const bx = document.querySelector('section.j>svg');
const bc = document.querySelector('section.j .t');

const maxScroll = 100; // сколько px = полная темнота

sectionW.addEventListener('scroll', () => {
    // получаем скоролл от вверха
    const scrollY = sectionW.scrollTop;

    // прогресс от 1 до 0
    let opacity = 1 - (scrollY / maxScroll);

    // ограничиваем, чтобы не вылезало
    opacity = Math.min(Math.max(opacity, 0), 1);

    // вешаем style на тег
    bx.style.opacity = opacity;
    bc.style.opacity = opacity;
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
const tabs = document.querySelectorAll('section.j .a');
const sectionB = document.querySelector('section.b');

tabs.forEach((tab, index) => {
    tab.addEventListener('pointerdown', () => {

        // убрать активный класс у всех вкладок
        tabs.forEach(t => t.classList.remove('b'));

        // добавить активный класс текущей
        tab.classList.add('b');

        // переключение секций
        if (index === 0) {
            sectionB.style.display = "none";
            sectionW.style.display = "block";
        } else {
            sectionW.style.display = "none";
            sectionB.style.display = "block";
        }
    });
});

// подгрузка ссылок

const list = document.querySelector('section.w ul');

async function loadBooks() {

    const response = await fetch('data.json');
    const data = await response.json();
    const shuffled = [...data].sort(() => Math.random() - 0.5);

    const fragment = document.createDocumentFragment();

    shuffled.forEach(item => {
        const li = document.createElement('li');

        li.innerHTML = `<a href="${item.src}"><img width="${item.width}" height="${item.height}" data-src="${item.img_src}"></a>`;

        fragment.append(li);
    });

    list.append(fragment);

    // Подключаем lazy-load к новым изображениям
    $('img[data-src]', true).forEach(img => {
        observer.observe(img)
    });
    
    // Masonry
    // настройка сетки masonry.js
    const grid = document.querySelector('section.w ul');

    const layoutButtons = document.querySelectorAll('section.r .c li');
    const menu = document.querySelector('section.r');
    const backbtn = document.querySelector('section.r .a');
    const btnmenu = document.querySelector('section.j>svg');

    layoutButtons[0].addEventListener('click', () => {
        sectionW.classList.remove('m');

        msnry.options.gutter = getGutter();
        msnry.layout();
    });

    layoutButtons[1].addEventListener('click', () => {
        sectionW.classList.add('m');

        msnry.options.gutter = getGutter();
        msnry.layout();
    });

    function getGutter() {
        if (window.innerWidth > 900) return 40;
        return sectionW.classList.contains('m') ? 20 : 6;
    }

    let msnry = new Masonry(grid, {
        itemSelector: 'li',
        columnWidth: 'li',
        gutter: getGutter()
    });

    window.addEventListener('resize', () => {
        msnry.options.gutter = getGutter();
        msnry.layout();
    });

    backbtn.addEventListener('click', () => {
        btnmenu.classList.remove('c');
        menu.classList.remove('k');
    });

    btnmenu.addEventListener('click', () => {
        btnmenu.classList.add('c');
        menu.classList.add('k');
    });
}

loadBooks();
