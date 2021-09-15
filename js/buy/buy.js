document.addEventListener('DOMContentLoaded', function() {
    let s = $('html'),
    d = $('body'),
    a = $('apple-pay-button'),
    b = $('section.zz'),
    e = $('aside input'),
    i = $('aside > div:first-child div:first-child'),
    c = $('section.zz div button:last-child'),
    r = $('aside > div:first-child div:last-child span'),
    p = 'no-scroll',
    v = 'visible',
    h = 'hide',
    x = 'disappear';

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

    e.click(function() {
        r[0].classList.add(h);
        i[0].classList.add(x);
    });
    r.click(function() {
        r[0].classList.remove(h);
        i[0].classList.remove(x);
    });
});
