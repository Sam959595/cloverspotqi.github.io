$(window).scroll(function() {
    let w = $('article h1'),
    p =  $('nav'),
    n = 'title';

    if ($(window).scrollTop() > w.height()) {
        p[0].classList.add(n);
    } else {
        p[0].classList.remove(n);
    };
});

//

async function articleDown() {
    let t = await fetch('json/general.json'),
    i = await t.json(),
    e = document.querySelector('main ul'),
    r = null;
    
    i = i.splice(0, 5);

    for (r in i) {

        e.innerHTML += `<li><a href="${i[r].href}"><h6>${i[r].title}</h6></a></li>`;
    };
};
articleDown();

//

document.addEventListener('DOMContentLoaded', function() {
    let a = $('dl dd.string'),
    b = $('dl dd.string div');

    if (b.height() > '72') {
        a[0].classList.add('hide');

        let b = document.createElement('a');

        b.innerHTML = 'далее';
        a[0].appendChild(b);
    };

    $('dl dd.string button').click(function() {
        a[0].classList.remove('hide');
        this.remove();
    });
});