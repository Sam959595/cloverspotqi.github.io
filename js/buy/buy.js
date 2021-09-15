document.addEventListener('DOMContentLoaded', function() {
    let s = $('html'),
    d = $('body'),
    a = $('apple-pay-button'),
    b = $('section.zz'),
    e = $('aside input'),
    c = $('section.zz div button:last-child'),
    p = 'no-scroll',
    v = 'visible';

    a.click(function() {
        b[0].classList.add(v);
        s[0].classList.add(p);
        d[0].classList.add(p);
    });
    c.click(function() {
        b[0].classList.remove(v);
        s[0].classList.remove(p);
        d[0].classList.remove(p);
    });
});
