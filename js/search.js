document.addEventListener('DOMContentLoaded', function() {
    let d = $('body'),
    a = $('main li:last-child'),
    b = $('aside'),
    e = $('aside input'),
    i = $('aside > div:first-child div:first-child'),
    c = $('aside > div:first-child div:first-child span'),
    r = $('aside > div:first-child div:last-child span'),
    v = 'visible',
    y = 'disguise',
    h = 'hide',
    x = 'disappear';

    a.click(function() {
        
        b[0].classList.add(v);
        d[0].classList.add(y);
    });
    c.click(function() {

        b[0].classList.remove(v);
        d[0].classList.remove(y);
    });

    e.click(function() {

        r[0].classList.add(h);
        i[0].classList.add(x);
    });
    r.click(function() {

        r[0].classList.remove(h);
        i[0].classList.remove(x);
    });
});

//

async function categories() {
    let t = await fetch('json/nav.json'),
    i = await t.json(),
    r = null,
    e = document.querySelector('aside > div:last-child ul:first-child');

    for (r in i) {

        e.innerHTML += `<li><a href="${i[r].href}">${i[r].title}</a></li>`;
    };
};
categories();

async function categDown() {
    let t = await fetch('json/post.json'),
    i = await t.json(),
    r = null,
    e = document.querySelector('aside > div:last-child ul:last-child');

    for (r in i) {

        e.innerHTML += `<li><a href="${i[r].href}"><div style="background-image: url(${i[r].image_mini})"></div><div><p>${i[r].date}</p><h5>${i[r].title}</h5></div></a></li>`;
    };
};
categDown();