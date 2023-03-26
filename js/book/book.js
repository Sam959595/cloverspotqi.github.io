$(document).ready(() => {

    // img load
    document.querySelectorAll('[data-img]').forEach(x => {
        new IntersectionObserver((a, b) => {
            a.forEach(x => {
                if (x.isIntersecting) {
                    b.unobserve(x.target);
                    let m = new Image();
                    m.src = x.target.dataset.img;
                    m.onload = () => {
                        x.target.setAttribute('style', 'background-image: url(\'' + x.target.dataset.img + '\')');
                        x.target.removeAttribute('data-img')
                    }
                }
            })
        }).observe(x)
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

// hidden book

$(window).ready(() => {
    window.addEventListener('scroll', () => {
        let bb = $('section.nn')[0]

        if ($(window).scrollTop() >= 670) {
            bb.style.visibility = 'hidden'
        } else {
            bb.style.visibility = ''
        }
    })
})
