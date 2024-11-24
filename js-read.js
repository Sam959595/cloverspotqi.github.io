// tab nav
document.addEventListener('dblclick', () => {
    $('section.e')[0].style = 'pointer-events: auto; opacity: 1'
})

window.addEventListener('touchmove', () => {
    $('section.e')[0].removeAttribute('style')
})

// margin-inline
window.addEventListener('change', () => {
    let vv = $('section.e select:nth-child(1)').val(), nn = $('section.t')[0];

    if (vv == 1) {
        nn.classList.remove('w')
    } else if (vv == 2) {
        nn.classList.add('w')
    }
})

// font-size
window.addEventListener('change', () => {
    let vv = $('section.e select:nth-child(2)').val(), nn = $('section.t')[0];

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

// background-color
window.addEventListener('change', () => {
    let vv = $('section.e select:nth-child(3)').val(), nn = $('body');

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

// line-height
window.addEventListener('change', () => {
    let vv = $('section.e select:nth-child(4)').val(), nn = $('section.t')[0];

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

// font-family
window.addEventListener('change', () => {
    let vv = $('section.e select:nth-child(5)').val(), nn = $('section.t')[0];

    if (vv == 1) {
        nn.classList.add('a')
        nn.classList.remove('v', 'u', 'h')
    } else if (vv == 2) {
        nn.classList.add('v')
        nn.classList.remove('a', 'u', 'h')
    } else if (vv == 3) {
        nn.classList.add('u')
        nn.classList.remove('a', 'v', 'h')
    } else if (vv == 4) {
        nn.classList.add('h')
        nn.classList.remove('a', 'v', 'u')
    } else if (vv == 5) {
        nn.classList.remove('a', 'v', 'u', 'h')
    }
})

// notes
document.querySelectorAll('section.t u').forEach(x => {
    x.addEventListener('click', e => {
        document.querySelectorAll('section.m').forEach(x => {
            if (x.id === e.target.id) {
                x.style = 'opacity: 0; display: block; transition: opacity .4s';

                setTimeout(() => {
                    x.style.opacity = '1'
                }, 0)
            }
            window.addEventListener('pointermove', () => {
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

// teleprompter
// window.addEventListener('change', () => {
//     let vv = $('section.e div:nth-child(6) select').val(), nn = $('html')[0];
//     let a, b = 0;

//     if (vv == 1) {
//         console.log('n');
//         nn.removeAttribute('style')
//     } else if (vv == 2) {
//         nn.style.touchAction = 'none'
//         console.log('h');
//         a, b = 0;
//         a = 5, b = 100
//     } else if (vv == 3) {
//         console.log('b');
//         a, b = 0;
//         a = 50, b = 500
//     }

//     v = setInterval(() => {
//         if ($(window).scrollTop() == $(document).height()) {
//             $(window).scrollTop(0)
//         } else {
//             $(window).scrollTop($(window).scrollTop() + a)
//         }
//     }, b)


//     document.addEventListener('scroll', () => {
//         console.log($(window).scrollTop());
//     })
// })
