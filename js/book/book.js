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

// double-tap like
$(document).ready(() => {
    $('section.dd li')[0].addEventListener('dblclick', () => {

        if ($('section.dd li')[0].querySelector('icon') === null) {
            $('section.dd li')[0].style.position = 'relative';

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

// double-tap like
document.addEventListener('dblclick', () => {
    $('section.mm')[0].addEventListener('dblclick', () => {
        $('section.pp')[0].style.cssText = 'visibility: visible; opacity: 1 !important; animation-play-state: running; transition: visibility .5s, opacity .5s';

        setTimeout(() => {
            $('section.pp')[0].removeAttribute('style');
        }, 1000)
    })
})
