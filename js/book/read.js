// tab nav
document.addEventListener('dblclick', () => {
    $('section.e')[0].style = 'pointer-events: auto; opacity: 1'
})
window.addEventListener('touchmove', () => {
    $('section.e')[0].removeAttribute('style')
})

// font
window.addEventListener('change', () => {
    let vv = $('section.e div:nth-child(1) select').val(), nn = $('section.t')[0];

    if (vv == 1) {
        nn.classList.add('a')
        nn.classList.remove('v')
    } else if (vv == 2) {
        nn.classList.add('v')
        nn.classList.remove('a')
    } else if (vv == 3) {
        nn.classList.remove('v', 'a')
    }
})

// text
window.addEventListener('change', () => {
    let vv = $('section.e div:nth-child(2) select').val(), nn = $('section.t')[0];

    if (vv == 1) {
        nn.classList.add('y')
        nn.classList.remove('s', 'r')
    } else if (vv == 2) {
        nn.classList.add('s')
        nn.classList.remove('y', 'r')
    } else if (vv == 3) {
        nn.classList.remove('s', 'y', 'r')
    } else if (vv == 4) {
        nn.classList.add('r')
        nn.classList.remove('s', 'y')
    }
})

// interval
window.addEventListener('change', () => {
    let vv = $('section.e div:nth-child(3) select').val(), nn = $('section.t')[0];

    if (vv == 1) {
        nn.classList.remove('f', 'j')
    } else if (vv == 2) {
        nn.classList.add('f')
        nn.classList.remove('j')
    } else if (vv == 3) {
        nn.classList.add('j')
        nn.classList.remove('f')
    }
})

// background
window.addEventListener('change', () => {
    let vv = $('section.e div:nth-child(4) select').val(), nn = $('body');

    if (vv == 6) {
        nn.attr('class', 'b')
    } else if (vv == 5) {
        nn.attr('class', 'c')
    } else if (vv == 4) {
        nn.attr('class', 'd')
    } else if (vv == 3) {
        nn.attr('class', 'i')
    } else if (vv == 2) {
        nn.attr('class', 'f')
    } else if (vv == 1) {
        nn[0].removeAttribute('class')
    }
})

// notes
document.querySelectorAll('u').forEach(x => {
    x.addEventListener('click', e => {
        document.querySelectorAll('section.m').forEach(x => {
            if (x.id === e.target.id) {
                x.style = 'opacity: 0; display: block; transition: opacity .4s';

                setTimeout(() => {
                    x.style.opacity = '1'
                }, 0)
            }
            window.addEventListener('touchmove', () => {
                if (x.hasAttribute('style')) {
                    x.style.opacity = '0';

                    setTimeout(() => {
                        x.removeAttribute('style')
                    }, 400)
                }
            })
        })
    })
})

// last book
new IntersectionObserver((x, e) => {
    x.forEach(x => {
        if (x.isIntersecting) {
            // e.unobserve(x.target);
            setTimeout(() => {
                $('section.b')[0].style = 'transform: translateY(0)'
            }, 3000);
        }
    })
    $('section.b .s').click(() => {
        $('section.b')[0].style.transform = '';
        $('section.b .s')[0].style.opacity = '.3';

        setTimeout(() => {
            $('section.b')[0].removeAttribute('style');
            $('section.b .s')[0].removeAttribute('style')
        }, 2000)
    })
}).observe($('#rr')[0])

// setInterval(() => {
//     if ($('section.t').scrollTop() == $(document).height()) {
//         $(window).scrollTop(0)
//     } else {
//         $(window).scrollTop($(window).scrollTop() + 5)
//     }
// }, 100)
