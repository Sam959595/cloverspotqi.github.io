async function sech() {
    let t = await fetch('json/post.json'),
    b = await t.json(),
    e = document.querySelector('.includes ul');

    b = b.splice(0, 5);

    for (let i = 0; i < b.length; i++) {
        e.innerHTML += `<li><a href="${b[i].href}"><div style="background-image: url(${b[i].image})"></div><div><p>${b[i].date}</p><h5>${b[i].title}</h5></div></a></li>`;
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
            b = b.splice(3, 0, b.splice(undefined, 3));

            console.log('call');
        };
    });
};
sech();

//

$(window).scroll(function() {
    let w = $('blockquote'),
    p = $('nav ul'),
    u = 'title';

    if ($(window).scrollTop() > w.height()) {
        p[0].classList.add(u);
    } else {
        p[0].classList.remove(u);
    };
});

//

window.onload = function() {
    $('blockquote p')[0].classList.add('quote');
};