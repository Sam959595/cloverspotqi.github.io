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

async function getResponse() {
    let t = await fetch('https://sam959595.github.io/cloverspotqi.github.io/json/post.json');
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
        </li>`
        i[key];
    };
};

getResponse();

globalThis == this //для различных редакторов, сгруппировать глобальное обращение