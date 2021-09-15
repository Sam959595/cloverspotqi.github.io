document.addEventListener('DOMContentLoaded', function() {
    let h = $('html'),
    b = $('body'),
    o = $('section.vv div button'),
    e = $('section.zz div button:last-child'),
    z = $('section.zz'),
    n = 'no-scroll',
    v = 'visible';

    o.click(function() {
        h.classList.add(n);
        b.classList.add(n);
        z.classList.add(v);
    });
    e.click(function() {
        h.classList.remove(n);
        b.classList.remove(n);
        z.classList.remove(v);
    });
});
