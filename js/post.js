function elLoad() {

    if (true) {
        async function sech() {
            let t = await fetch('json/post.json'),
            i = await t.json(),
            r = null,
            e = document.querySelector('.includes ul');
        
            i = i.splice(0, 10);
        
            for (r in i) {
        
                e.innerHTML += `<li><a href="${i[r].href}"><div data-img="${i[r].image}" style="background-image: url(${i[r].image})"></div><div><p>${i[r].date}</p><h5>${i[r].title}</h5></div></a></li>`;
            };
        };
        sech();

        console.log('show');
    } else {
        console.log('null');
    }
};
elLoad();

//

$(window).scroll(function() {
    let w = $('blockquote'),
    p = $('nav'),
    u = 'title';

    if ($(window).scrollTop() > w.height()) {
        p[0].classList.add(u);
    } else {
        p[0].classList.remove(u);
    }
});

//

window.onload = function() {
    $('blockquote p')[0].classList.add('quote');
};