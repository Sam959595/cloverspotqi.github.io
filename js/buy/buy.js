document.addEventListener('DOMContentLoaded', function() {
    let q = $('main ul li:nth-child(2)'),
    o = $('.includes')[0],
    u = 'x';

    q.click(function() {
        o.load(u);
    });

    //

    let s = $('html'),
    d = $('body'),
    a = $('.attachment li:last-child'),
    b = $('aside'),
    e = $('aside input'),
    i = $('aside > div:first-child div:first-child'),
    c = $('aside > div:first-child div:first-child span'),
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
