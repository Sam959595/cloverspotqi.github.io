document.addEventListener('DOMContentLoaded', function() {
    let h = $('html'),
    b = $('body'),
    o = $('section.vv div button'),
    e = $('section.zz div button:last-child'),
    z = $('section.zz'),
    n = 'no-scroll',
    v = 'visible';

    o.click(function() {
        h[0].classList.add(n);
        b[0].classList.add(n);
        z[0].classList.add(v);
    });
    e.click(function() {
        h.classList.remove(n);
        b.classList.remove(n);
        z.classList.remove(v);
    });
});
