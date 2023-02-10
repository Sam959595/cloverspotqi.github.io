$(document).ready( () => {
    let ll = new IntersectionObserver( x => {
        x.forEach(xx => {
            if (xx.isIntersecting) {
                $('section.bb')[0].style.visibility = 'visible';
                
                setTimeout( () => {
                    $('section.bb')[0].style.opacity = '1';
                    
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

//

document.addEventListener('dblclick', () => {
    $('section.ee')[0].classList.add('eee')
})

window.addEventListener('scroll', () => {
    $('section.ee')[0].classList.remove('eee')
})

//

window.addEventListener('change', () => {
    let vv = $('#bb').val(),
        nn = $('section.vv')

    if (vv == 1) {
        nn[0].classList.add('y')
        nn[0].classList.remove('yy', 'yyy')
    } else if (vv == 2) {
        nn[0].classList.add('yy')
        nn[0].classList.remove('y', 'yyy')
    } else if (vv == 3) {
        nn[0].classList.remove('yy', 'y', 'yyy')
    } else if (vv == 4) {
        nn[0].classList.add('yyy')
        nn[0].classList.remove('yy', 'y')
    }
})

window.addEventListener('change', () => {
    let vv = $('#nn').val(),
        nn = $('section.vv')

    if (vv == 1) {
        nn[0].classList.add('zzz')
        nn[0].classList.remove('sss')
    } else if (vv == 2) {
        nn[0].classList.add('sss')
        nn[0].classList.remove('zzz')
    } else if (vv == 3) {
        nn[0].classList.remove('sss', 'zzz')
    }
})

document.addEventListener('change', () => {
    let vv = $('#ee').val(),
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
