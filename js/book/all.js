// all, lazy load image url(a)
$(document).ready(() => {
    let ll = new IntersectionObserver((a, b) => {
        a.forEach(x => {
            if (x.isIntersecting) {
                let mm = new Image();
                mm.src = x.target.dataset.url;
                mm.onload = () => {
                    x.target.setAttribute('style', 'background-image: url(\'' + x.target.dataset.url + '\')');
                    x.target.removeAttribute('data-url')
                };

                b.unobserve(x.target)
            }
        })
    }, {
        threshold: 0
    });

    document.querySelectorAll('[data-url]').forEach(a => {
        ll.observe(a)
    })
})

// all, lazy load image src(img)
$(document).ready(() => {
    let ll = new IntersectionObserver((a, b) => {
        a.forEach(x => {
            if (x.isIntersecting) {
                let mm = new Image();
                mm.src = x.target.dataset.src;
                mm.onload = () => {
                    x.target.src = x.target.dataset.src;
                    x.target.removeAttribute('data-src')
                };

                b.unobserve(x.target)
            }
        })
    }, {
        threshold: 0
    });

    document.querySelectorAll('[data-src]').forEach(x => {
        ll.observe(x)
    })
})

// all, back library
window.addEventListener('touchstart', x => {
    if (x.targetTouches.length === 3) {
        location.href = 'https://sam959595.github.io/cloverspotqi.github.io/book-library.html'
    }
})

// start, tags inset background
window.addEventListener('DOMContentLoaded', () => {
    let d = $('#yy'),
        a = $('section.nn svg'),
        k = $('html')[0],
        b = $('body')[0],
        c = $('section.nn')[0]

    d.click(() => {
        k.style.cssText = 'overflow: hidden; height: 100%';
        b.style.cssText = 'overflow: hidden; height: 100%';
        c.style.cssText = 'pointer-events: auto; opacity: 1'
    })
    a.click(() => {
        k.removeAttribute('style');
        b.removeAttribute('style');
        c.removeAttribute('style')
    })
})

// author, button follow
window.addEventListener('click', () => {
    let a = $('section.ww figcaption button')[0]

    a.click(() => {
        (a.textContent === 'В ЧИТАТЕЛИ') ? a.textContent = 'ЧИТАЮ' : a.textContent = 'В ЧИТАТЕЛИ';
        (a.textContent === 'В ЧИТАТЕЛИ') ? a.classList.toggle('aa') : a.classList.toggle('aa')
    })
})

// book, button follow
window.onload = () => {
    $('section.ee')[0].onclick = x => {
        let aa = x.target;

        while (aa) {
            if (aa.tagName == 'BUTTON') {
                (aa.textContent === 'СЛЕДОВАТЬ') ? aa.textContent = 'ВЫ СЛЕДУЕТЕ' : aa.textContent = 'СЛЕДОВАТЬ';
                (aa.textContent === 'СЛЕДОВАТЬ') ? aa.removeAttribute('style') : aa.style.color = 'var(--gray)'
            };

            aa = aa.parentNode;
        }
    }
}

// double-tap post
$(document).ready(() => {
    $('section.dd li')[0].addEventListener('dblclick', () => {

        if ($('section.dd li')[0].querySelector('icon') === null) {
            //contain: paint $('section.dd li')[0].style.position = 'relative';

            let vv = document.createElement('icon');
            $('section.dd li')[0].appendChild(vv);

            $('section.dd li icon')[0].style.cssText = 'opacity: 1; transition: opacity .2s ease-out';

            setTimeout(() => {
                $('section.dd li icon')[0].style.opacity = '0';

                setTimeout(() => {
                    $('section.dd li icon')[0].remove();
                    $('section.dd li')[0].removeAttribute('style');
                }, 200)
            }, 900)
        } else {
            return false;
        }
    })
})

// library, buttom edit
window.addEventListener('DOMContentLoaded', () => {
    let a = $('section.ee>button')

    a.click(() => {
        $('section.ee')[0].classList.toggle('gg');
        (a[0].textContent === 'ПРАВИТЬ') ? a[0].textContent = 'ГОТОВО' : a[0].textContent = 'ПРАВИТЬ';
    })
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

    $('#tt')[0].onclick = x => {
        let aa = x.target;

        while (aa != this) {
            if (aa.tagName == 'H6') {
                jj(aa);

                return;
            };

            aa = aa.parentNode;
        }
    }
}
