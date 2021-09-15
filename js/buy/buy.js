document.addEventListener('DOMContentLoaded', function() {
    let h = $('html'),
    b = $('body'),
    a = $('section.rr button'),
    z = $('section.zz'),
    c = $('section.zz div button:last-child'),
    n = 'no-scroll',
    v = 'visible';

    a.click(function() {
        z[0].classList.add(v);
        h[0].classList.add(n);
        b[0].classList.add(n);
    });
    c.click(function() {
        z[0].classList.remove(v);
        h[0].classList.remove(n);
        b[0].classList.remove(n);
    });
});
