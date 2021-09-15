document.addEventListener('DOMContentLoaded', function() {
    let h = $('html'),
    b = $('body'),
    a = $('section.rr button'),
    z = $('section.zz'),
    e = $('aside input'),
    c = $('section.zz div button:last-child'),
    p = 'no-scroll',
    v = 'visible';

    a.click(function() {
        z[0].classList.add(v);
        h[0].classList.add(p);
        b[0].classList.add(p);
    });
    c.click(function() {
        z[0].classList.remove(v);
        h[0].classList.remove(p);
        b[0].classList.remove(p);
    });
});
