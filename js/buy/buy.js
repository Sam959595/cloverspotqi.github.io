document.addEventListener('DOMContentLoaded', () => {
    let o = $('apple-pay-button'),
    e = $('section.zz div button:last-child'),
    h = $('html'),
    b = $('body'),
    z = $('section.zz'),
    n = 'no-scroll',
    v = 'visible';

    o.click( () => {
        h[0].classList.add(n);
        b[0].classList.add(n);
        z[0].classList.add(v);
    });
    e.click( () => {
        h[0].classList.remove(n);
        b[0].classList.remove(n);
        z[0].classList.remove(v);
    });

    let p = $('section.zz li:last-child'),
        j = $('section.zz li:last-child h6'),
        f = 'active';

    p.click( () => {
        if (j[0].classList.contains(f) == false) {
            j[0].classList.add(f);
            } else {
                  j[0].classList.remove(f);
         }
    });
});
