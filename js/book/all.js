// all, inset inner
window.addEventListener('DOMContentLoaded', () => {
    let bb = window.innerWidth,
        nn = window.innerHeight,
        mm = document.createElement('style')

    document.head.append(mm)
    mm.innerHTML = ':root{--screen-x:' + bb + 'px; --screen-y:' + nn + 'px}'
})

// start, lazy load image
$(document).ready( () => {
    let ll = new IntersectionObserver( (a, b) => {
        a.forEach( x => {
            if (x.isIntersecting) {
                let mm = new Image();
                mm.src = x.target.dataset.img;
                mm.onload = () => {
                    x.target.setAttribute('style', 'background-image: url(\'' + x.target.dataset.img + '\')');
                    x.target.removeAttribute('data-img')
                }

                b.unobserve(x.target);
            }
        })
    }, {
        threshold: 0
    });
    
    document.querySelectorAll('[data-img]').forEach( a => {
        ll.observe(a);
    });
})

// start, tags inset background
window.addEventListener('DOMContentLoaded', () => {
    let d = $('section.ee nav ul h1'),
        a = $('html'),
        b = $('body'),
        c = $('section.nn')

    d.click(() => {
        a[0].classList.add('qq');
        b[0].classList.add('qq');
        c[0].classList.add('qqq')
    })
})

// start, tags
window.addEventListener('DOMContentLoaded', () => {
    let jj = (x, xx) => {
        let mm;

        x.addEventListener('touchstart', e => {
            mm = setTimeout(() => {
                mm = null;
                e.stopPropagation();
                xx(e.target);
                // xx()
            }, 800);
        });

        x.addEventListener('contextmenu', e => {
            e.preventDefault();
        });

        x.addEventListener('touchend', () => {
            if (mm) clearTimeout(mm);
        });

        x.addEventListener('touchmove', () => {
            if (mm) clearTimeout(mm);
        });
    }

    jj($('section.nn')[0], () => {
        let a = $('html'),
            b = $('body'),
            c = $('section.nn');

        a[0].classList.remove('qq');
        b[0].classList.remove('qq');
        c[0].classList.remove('qqq');
    })
})

// author, button follow
window.addEventListener('DOMContentLoaded', () => {
    let a = $('section.ww figcaption button')

    a.click(() => {
        (a[0].textContent === 'В ЧИТАТЕЛИ') ? a[0].textContent = 'ЧИТАЮ' : a[0].textContent = 'В ЧИТАТЕЛИ';
        (a[0].textContent === 'В ЧИТАТЕЛИ') ? a[0].classList.toggle('aa') : a[0].classList.toggle('aa')
    })
})

// library, buttom edit
window.addEventListener('DOMContentLoaded', () => {
    let a = $('section.ee ul>button')

    a.click(() => {
        $('section.ee')[0].classList.toggle('gg');
        (a[0].textContent === 'ПРАВИТЬ') ? a[0].textContent = 'ОТМЕНИТЬ' : a[0].textContent = 'ПРАВИТЬ';
    })
})

// book, heart like
window.addEventListener('touchstart', x => {
    let a = $('section.pp')

    if (x.targetTouches.length === 3) {
        a[0].classList.add('qq')

        setTimeout(() => {
            a[0].classList.remove('qq')
        }, 2000)
    }
})

// all, back library
window.addEventListener('touchstart', x => {
    if (x.targetTouches.length === 2) {
        location.href = 'https://sam959595.github.io/cloverspotqi.github.io/book-library.html'
    }
})

// book, comment hide tap
window.onload = () => {
    let jj = x => {
        let cc;

        if (cc) {
            cc.classList.add('uu');
        }
        cc = x;
        cc.classList.add('uu');
    }

    $('#tt')[0].onclick = xx => {
        let aa = xx.target;

        while (aa != this) {
            if (aa.tagName == 'H6') {
                jj(aa);

                return;
            };

            aa = aa.parentNode;
        }
    }
}
