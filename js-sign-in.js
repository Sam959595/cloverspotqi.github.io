// Маленькая утилита для удобства
const $ = (selector, all = false) => all ? document.querySelectorAll(selector) : document.querySelector(selector);

// DOM-элементы ищутся только один раз при загрузке страницы (а потом используются из памяти)
const sectionE = $('section.e');
const imgElements = $('img[data-src]', true);

// Подсказка полноэкранного просмотра
const visitUser = () => {
    // Получаем доступ к записи
    const hasVisited = localStorage.getItem('hasVisited');

    if (!hasVisited) {
        // Пользователь впервые зашел — показываем подсказку
        document.body.insertAdjacentHTML('beforeend', '<section class="r">Используйте клавиши <code>+</code> и <code>-</code> чтобы перейти в полноэкранный<br>или обычный просмотр.</section>');
        const hint = document.querySelector('section.r');

        if (hint) {
            // Ждем отрисовку браузера
            requestAnimationFrame(() => {
                hint.style.opacity = '1';
            });

            setTimeout(() => {
                // Убираем подсказку
                hint.style.opacity = '0';
                // Ждем завершении CSS
                setTimeout(() => {
                    hint.remove();
                }, 2500);
            }, 20000);
        }

        // Ставим метку, что пользователь уже заходил
        localStorage.setItem('hasVisited', 'true');
    }
};

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

// -- Загрузка JSON и обработка ссылок --

// Даем понять что тип данных будет массивом
let jsonData = [];

// Получаем JSON
fetch('data.json').then(res => res.json()).then(data => {
    jsonData = data;

    // Слушаем клики на ссылках
    $('section.n a', true).forEach(link => {
        link.addEventListener('click', e => {
            // Отменяем переход по ссылке
            e.preventDefault();

            // Получаем ссылку, убираем слеш
            const id = link.getAttribute('href').replace('/', '');

            // Затем вручную вызываем обработку
            loadContentById(id, true);

            // Проверяем нужна ли подсказка
            visitUser();
        });
    });
});

// Общая функция закрытия контента
const removeCont = e => {
    // Убрать показ окна
    e.classList.remove('q');
    // Ждем завершение CSS и очищаем
    setTimeout(() => { e.innerHTML = ''; }, 150);
};

// Функция загрузки и отображения
const loadContentById = (id) => {
    const item = jsonData.find(entry => entry.src === id);

    if (!item) {
        removeCont(sectionE);
        return;
    }

    // Сбросить все предыдущие наблюдения
    observer.disconnect();

    // Формируем li вложения изображений
    const imageHtml = item.img.map(e => `<li><img width="${e.width}" height="${e.height}" data-src="${e.src}"></li>`).join('');

    // Формируем основной HTML
    const contentHtml = `
        <h1>${item.title1}</h1>
        <ul>${imageHtml}</ul>
        <p>${item.title3}</p>
        <svg width="81" height="81">
            <path stroke="#ffffff50" stroke-linecap="round" stroke-width="2" d="M47 34 34 47m0-13 13 13"/>
        </svg>
    `;

    // Прикрепить HTML
    sectionE.innerHTML = contentHtml;

    // Показать окно
    sectionE.classList.add('q');

    // Подключаем lazy-load к новым изображениям
    $('img[data-src]', true).forEach(img => {
        observer.observe(img);
    });

    // Кнопка закрытия SVG
    $('section.e svg').addEventListener('click', () => {
        // Очищаем sectionE
        removeCont(sectionE)
    });
}
















// Даем понять что тип данных будет массивом
let jsonDataX = [];
const sectionD = $('section.d');

// Получаем JSON
fetch('data-stories.json').then(res => res.json()).then(dataX => {
    jsonDataX = dataX;

    // Слушаем клики на ссылках
    $('section.a a', true).forEach(link => {
        link.addEventListener('click', e => {
            // Отменяем переход по ссылке
            e.preventDefault();

            const idX = link.getAttribute('href');
            loadContentByIdX(idX);
        });
    });
});

// Функция загрузки и отображения
const loadContentByIdX = (id) => {
    const itemX = jsonDataX.find(entry => entry.id === id);

    if (!itemX) return;

    // Формируем li вложения изображений 
    const imageHtmlc = itemX.img.map(() => `<li><div></div></li>`).join('');
    const imageHtmlX = itemX.img.map(e => `<img style="display: none" width="720" height="720" src="${e.src}">`).join('');

    // Формируем основной HTML
    const contentHtmlX = `
        <div class="a">
            ${imageHtmlX}
            <ul>
                ${imageHtmlc}
            </ul>
            <div class="b">
                <div></div>
                <div></div>
            </div>
            <svg width="90" height="80"><path stroke="#595959" stroke-linecap="round" stroke-width="2.3" d="M53 27 37 43m0-16 16 16"/></svg>
        </div>
    `;

    // Прикрепить HTML
    sectionD.innerHTML = contentHtmlX;

    // Показать окно
    requestAnimationFrame(() => {
        sectionD.classList.add('q');
    });

    stories();

    // Кнопка закрытия SVG
    $('section.d svg').addEventListener('click', () => {
        // Очищаем sectionE
        sectionD.classList.remove('q');
        setTimeout(() => { sectionD.innerHTML = ''; }, 150);
    });
}

// История
const stories = () => {
    const section = document.querySelector("section.d");
    const images = Array.from(section.querySelectorAll("img"));
    const bars = section.querySelectorAll("ul li div");
    const nextBtn = section.querySelector(".b div:last-child");
    const prevBtn = section.querySelector(".b div:first-child");

    let current = 0;
    let startTime = null;
    let animationFrame = null;
    const duration = 7000; // 7 секунды

    function show(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none";
        });

        // Сброс всех прогрессов
        bars.forEach((bar, i) => {
            bar.style.width = i < index ? "100%" : "0%";
        });

        startProgress(index);
    }

    function startProgress(index) {
        cancelAnimationFrame(animationFrame);
        startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            bars[index].style.width = (progress * 100).toFixed(2) + "%";

            if (progress < 1) {
                animationFrame = requestAnimationFrame(step);
            } else {
                current = (current + 1) % images.length;
                show(current);
            }
        }

        animationFrame = requestAnimationFrame(step);
    }

    nextBtn.onclick = () => {
        current = (current + 1) % images.length;
        show(current);
    };

    prevBtn.onclick = () => {
        current = (current - 1 + images.length) % images.length;
        show(current);
    };

    show(current);
};





// Клавиша закрытия Escape и переключение полноэкранного просмотра
window.addEventListener('keyup', event => {
    if (sectionD.classList.contains('q') && event.key === 'Escape') {
        // Очищаем sectionE
        sectionD.classList.remove('q');
        setTimeout(() => { sectionD.innerHTML = ''; }, 150);
    } else if (sectionE.classList.contains('q') && event.key === 'Escape') {
        // Очищаем sectionE
        removeCont(sectionE)
    } else if (sectionE.classList.contains('q') && event.key === '=') {
        // Полноэкранный просмотр
        sectionE.classList.add('w');
    } else if (sectionE.classList.contains('q') && event.key === '-') {
        // Убираем полноэкранный просмотр
        sectionE.classList.remove('w');
    }
});

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
