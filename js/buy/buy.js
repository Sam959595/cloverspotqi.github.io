document.addEventListener('DOMContentLoaded', function () {
    let h = $('html'),
    b = $('body'),
    o = $('apple-pay-button'),
    e = $('section.zz div button:last-child'),
    z = $('section.zz'),
    n = 'no-scroll',
    v = 'visible';

    o.click(function () {
        h[0].classList.add(n);
        b[0].classList.add(n);
        z[0].classList.add(v);
    });
    e.click(function () {
        h[0].classList.remove(n);
        b[0].classList.remove(n);
        z[0].classList.remove(v);
    });

    let p = $('section.zz li:last-child button'),
        f = $('active');

    p.click(function () {
        p[0].classList.add(f);
    });
});
