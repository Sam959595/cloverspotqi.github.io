document.addEventListener('DOMContentLoaded', function() {

    $('nav button').click(function() {

        $('aside')[0].classList.add('visible');
        $('.includes')[0].classList.add('disguise');
    });
    $('aside main:first-child div:first-child button').click(function() {

        $('aside')[0].classList.remove('visible');
        $('.includes')[0].classList.remove('disguise');
    });

    $('aside input').click(function() {

        $('aside main:first-child div:last-child span')[0].classList.add('hide');
        $('aside main:first-child div:first-child')[0].classList.add('disappear');
    });
    $('aside main:first-child div:last-child span').click(function() {

        $('aside main:first-child div:last-child span')[0].classList.remove('hide');
        $('aside main:first-child div:first-child')[0].classList.remove('disappear');
    });
});

let data = [
    {
        "href": "recent-event\Поколение_Mac_разработанные_на_собственном_процессоре_Apple_M1.html",
        "image": "media/9.jpg",
        "date": "10 ноября, 2020",
        "title": "Поколение Mac разработанные на собственном процессоре Apple M1"
    },
    {
        "href": "recent-event\Нарушение-и-снижение-продуктивности-сна.html",
        "image": "media/2.jpg",
        "date": "9 ноября, 2020",
        "title": "Нарушение и снижение продуктивности сна"
    },
    {
        "href": "recent-event\Ограничение-уровня-звукового-прослушивания.html",
        "image": "media/4.png",
        "date": "20 сентября, 2020",
        "title": "Ограничение уровня звукового прослушивания"
    },
    {
        "href": "recent-event\1.html",
        "image": "media/4.jpg",
        "date": "4 октября, 2020",
        "title": "Системное обновление iOS 14.1 (предварительная версия)"
    }
]

let p = JSON.parse(data);

async function getResponse() {
    let t = await fetch('data');
    let i = await t.json();
    i = i.splice(0, 10);

    let key;
    let e = document.querySelector('.includes');

    for (key in i) {

        e.innerHTML += `
        <li>
            <a href="${i[key].href}">
                <div style="background-image: url(${i[key].image})"></div>
                <div>
                    <p>${i[key].date}</p>
                    <h5>${i[key].title}</h5>
                </div>
            </a>
        </li>`;

        i[key];
    };
};

getResponse();

globalThis == this //для различных редакторов, сгруппировать глобальное обращение