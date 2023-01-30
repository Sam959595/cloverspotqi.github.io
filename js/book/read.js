$(document).ready( () => {
    let ll = new IntersectionObserver( x => {
        x.forEach(xx => {
            if (xx.isIntersecting) {
                setTimeout( () => {
                    $('section.bb')[0].style.cssText = 'visibility: visible; opacity: 1';
                    
                    setTimeout( () => {
                        $('section.bb svg')[0].style.transform = 'scale(1)';

                        setTimeout( () => {
                            $('section.bb svg')[0].style.fill = 'var(--gray)';

                            ll.unobserve($('#rr')[0])
                        }, 2000)
                    }, 1000)
                }, 800)
            }
        }
    )}, {
        threshold: 1
    })

    ll.observe($('#rr')[0])
})

window.addEventListener('DOMContentLoaded', () => {
    let jj = (x, xx) => {
        let mm;

        x.addEventListener('touchstart', e => {
            mm = setTimeout(() => {
                mm = null;
                e.stopPropagation();
                xx(e.target);
            }, 500);
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

    jj($('body')[0], () => {
        $('section.ee')[0].classList.add('eee')
    })
})

window.addEventListener('touchend', () => {
    let vv = $('section.ee'),
        nn = $('section.ww')

    nn.click(() => {
        vv[0].classList.add('eee')
        nn[0].classList.add('www')
    })
})

window.addEventListener('touchmove', () => {
    let vv = $('section.ee')

    vv[0].classList.remove('eee')
})

//

window.addEventListener('DOMContentLoaded', () => {
    let vv = $('section.ee'),
        nn = $('section.ww')

    nn.mouseenter(() => {
        vv[0].classList.add('eee')
        nn[0].classList.add('www')
    })
    vv.mouseleave(() => {
        vv[0].classList.remove('eee')
        nn[0].classList.remove('www')
    })
})

//

window.addEventListener('change', () => {
    let vv = $('#bb').val(),
        nn = $('section.vv')

    if (vv == '1') {
        nn[0].classList.add('y')
        nn[0].classList.remove('yy', 'yyy')
    } else if (vv == '2') {
        nn[0].classList.add('yy')
        nn[0].classList.remove('y', 'yyy')
    } else if (vv == '3') {
        nn[0].classList.remove('yy', 'y', 'yyy')
    } else if (vv == '4') {
        nn[0].classList.add('yyy')
        nn[0].classList.remove('yy', 'y')
    }
})

window.addEventListener('change', () => {
    let vv = $('#nn').val(),
        nn = $('section.vv')

    if (vv == '1') {
        nn[0].classList.add('zzz')
        nn[0].classList.remove('sss')
    } else if (vv == '2') {
        nn[0].classList.add('sss')
        nn[0].classList.remove('zzz')
    } else if (vv == '3') {
        nn[0].classList.remove('sss', 'zzz')
    }
})

window.addEventListener('change', () => {
    let vv = $('#ee').val(),
        nn = $('body')[0],
        ll = $('meta[media="(prefers-color-scheme: light)"]'),
        dd = $('meta[media="(prefers-color-scheme: dark)"]');

    if (vv == '1') {
        nn.classList.add('rrr')
        nn.classList.remove('ttt', 'kkk', 'qqq')

        ll.attr('content', 'white')
        dd.attr('content', 'black')
    } else if (vv == '2') {
        nn.classList.add('ttt')
        nn.classList.remove('rrr', 'kkk', 'qqq')

        ll.attr('content', '#e0dacc')
        dd.attr('content', '#26221d')
    } else if (vv == '3') {
        nn.classList.remove('rrr', 'ttt', 'kkk', 'qqq')

        ll.attr('content', '#eeeded')
        dd.attr('content', '#353539')
    } else if (vv == '4') {
        nn.classList.add('kkk')
        nn.classList.remove('rrr', 'ttt', 'qqq')

        ll.attr('content', '#ddd')
        dd.attr('content', '#1a1a1c')
    }
    else if (vv == '5') {
        nn.classList.add('qqq')
        nn.classList.remove('rrr', 'ttt', 'kkk')

        ll.attr('content', '#f6efe5')
        dd.attr('content', '#51545c')
    }
})
