document.addEventListener('dblclick', () => {
    $('section.ee')[0].style.cssText = 'pointer-events: auto; opacity: 1'
})

$(window).ready(() => {
    let aa = 'ontouchstart' in window

    if (aa === true) {
        window.addEventListener('touchmove', () => {
            $('section.ee')[0].removeAttribute('style')
        })
    } else {
        window.addEventListener('scroll', () => {
            $('section.ee')[0].removeAttribute('style')
        })
    }
})

//

window.addEventListener('change', () => {
    let vv = $('section.ee select:first-child').val(),
        nn = $('section.vv')[0]

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

window.addEventListener('change', () => {
    let vv = $('section.ee select:nth-child(2)').val(),
        nn = $('section.vv')[0]

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

window.addEventListener('change', () => {
    let vv = $('section.ee select:last-child').val(),
        nn = $('body')

    if (vv == 1) {
        nn.attr('class', 'rrr')
    } else if (vv == 2) {
        nn.attr('class', 'ttt')
    } else if (vv == 3) {
        nn[0].removeAttribute('class')
    } else if (vv == 4) {
        nn.attr('class', 'kkk')
    } else if (vv == 5) {
        nn.attr('class', 'qqq')
    }
})

//

$(document).ready(() => {
    let ll = new IntersectionObserver(x => {
        x.forEach(xx => {
            if (xx.isIntersecting) {
                $('section.bb')[0].style.visibility = 'visible';

                setTimeout(() => {
                    $('section.bb')[0].style.opacity = '1';

                    setTimeout(() => {
                        $('section.bb svg')[0].style.transform = 'scale(1)';

                        setTimeout(() => {
                            $('section.bb svg')[0].style.fill = 'var(--gray)';
                        }, 2000)
                    }, 1000)
                }, 800)

                ll.unobserve($('#rr')[0])
            }
        }
        )
    })

    ll.observe($('#rr')[0])
})

$(document).ready(() => {
    let a = document.querySelectorAll('u'),
        m = document.querySelectorAll('.mm');

    a.forEach(x => {
        x.addEventListener('click', e => {
            m.forEach(x => {
                if (x.id === e.target.id) {
                    x.style.cssText = 'opacity: 0; display: block';

                    setTimeout(() => {
                        x.style.opacity = '1';

                        window.addEventListener('touchmove', () => {
                            x.style.opacity = '0';

                            setTimeout(() => {
                                x.removeAttribute('style')
                            }, 500)
                        })
                    })
                }
            })
        })
    })
})
