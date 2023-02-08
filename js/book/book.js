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

// double-tap book heart
document.addEventListener('dblclick', () => {
    $('section.pp')[0].style.cssText = 'visibility: visible; opacity: 1 !important; animation-play-state: running; transition: visibility .5s, opacity .5s';

    setTimeout(() => {
        $('section.pp')[0].removeAttribute('style');
    }, 1000)
})

// book, box follow
window.addEventListener('DOMContentLoaded', () => {
    let a = $('section.mm a[href]'),
        b = $('section.rr')

    a.click(() => {
        b[0].style.cssText = 'opacity: 1; pointer-events: initial';

        setTimeout(() => {
            b[0].removeAttribute('style');
        }, 10000)
    })
})

// apple button sign in

AppleID.auth.init({
    clientId: 'unknown',
    scope: 'email',
    redirectURI: 'https://mytld/test.php',
    state: 'DE'
});

$(document).ready(() => {
    $('#wwww')[0].onclick = () => {
        AppleID.auth.signIn();
    }
});

// window

$(window).ready(() => {
    window.addEventListener('scroll', () => {
        let bb = $('meta[name=theme-color]')

        if ($(window).scrollTop() >= 600) {
            bb.attr('content', '')
        } else {
            bb.attr('content', '#472b79')
        }
    })
})
