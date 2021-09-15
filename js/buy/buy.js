document.addEventListener('DOMContentLoaded', function() {
    let h = $('html'),
    b = $('body'),
    o = $('section.rr button'),
    z = $('section.zz'),
    e = $('section.zz div button:last-child'),
    n = 'no-scroll',
    v = 'visible';

    o.click(function() {
        z[0].classList.add(v);
        h[0].classList.add(n);
        b[0].classList.add(n);
    });
    e.click(function() {
        z[0].classList.remove(v);
        h[0].classList.remove(n);
        b[0].classList.remove(n);
    });
});
