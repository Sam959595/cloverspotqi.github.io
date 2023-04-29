// tab nav
document.addEventListener('dblclick', () => {
    $('section.e')[0].style.cssText = 'pointer-events: auto; opacity: 1'
})

window.addEventListener('touchmove', () => {
    $('section.e')[0].removeAttribute('style')
})

// background
window.addEventListener('change', () => {
    let vv = $('section.e select:first-child').val(),
        nn = $('body')

    if (vv == 6) {
        nn.attr('class', 'uuu')
    } else if (vv == 7) {
        nn.attr('class', 'ccc')
    } else if (vv == 8) {
        nn.attr('class', 'mmm')
    } else if (vv == 1) {
        nn.attr('class', 'rrr')
    } else if (vv == 2) {
        nn.attr('class', 'ttt')
    } else if (vv == 3) {
        nn.attr('class', 'qqq')
    } else if (vv == 4) {
        nn[0].removeAttribute('class')
    }
})

// style font
window.addEventListener('change', () => {
    let vv = $('section.e select:nth-child(2)').val(),
        nn = $('section.v')[0]

    if (vv == 1) {
        nn.classList.add('zzz')
        nn.classList.remove('sss')
    } else if (vv == 2) {
        nn.classList.add('sss')
        nn.classList.remove('zzz')
    } else if (vv == 3) {
        nn.classList.remove('sss', 'zzz')
    }
})

// size text
window.addEventListener('change', () => {
    let vv = $('section.e select:last-child').val(),
        nn = $('section.v')[0]

    if (vv == 1) {
        nn.classList.add('y')
        nn.classList.remove('yy', 'yyy')
    } else if (vv == 2) {
        nn.classList.add('yy')
        nn.classList.remove('y', 'yyy')
    } else if (vv == 3) {
        nn.classList.remove('yy', 'y', 'yyy')
    } else if (vv == 4) {
        nn.classList.add('yyy')
        nn.classList.remove('yy', 'y')
    }
})

// notes
document.querySelectorAll('u').forEach(x => {
    x.addEventListener('click', e => {
        document.querySelectorAll('section.m').forEach(x => {
            if (x.id === e.target.id) {
                x.style.cssText = 'opacity: 0; display: block';

                setTimeout(() => {
                    x.style.opacity = '1'
                }, 0)
            }
            window.addEventListener('touchmove', () => {
                x.style.opacity = '0';

                setTimeout(() => {
                    x.removeAttribute('style')
                }, 400)
            })
        })
    })
})

// last book
new IntersectionObserver((x, e) => {
    x.forEach(xx => {
        if (xx.isIntersecting) {
            e.unobserve(xx.target);
            $('section.b')[0].style.visibility = 'visible';
            setTimeout(() => {
                $('section.b')[0].style.opacity = '1';

                setTimeout(() => {
                    $('section.b svg')[0].style.transform = 'scale(1)';

                    setTimeout(() => {
                        $('section.b svg')[0].style.fill = 'var(--gray)';

                        setTimeout(() => {
                            $('section.b')[0].style.opacity = '0';

                            setTimeout(() => {
                                $('section.b')[0].remove()
                            }, 1000)
                        }, 5000)
                    }, 2000)
                }, 1000)
            }, 800)
        }
    })
}).observe($('#rr')[0])
