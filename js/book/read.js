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
        nn.attr('class', 'a')
    } else if (vv == 7) {
        nn.attr('class', 'b')
    } else if (vv == 8) {
        nn.attr('class', 'c')
    } else if (vv == 1) {
        nn.attr('class', 'd')
    } else if (vv == 2) {
        nn.attr('class', 'i')
    } else if (vv == 3) {
        nn.attr('class', 'f')
    } else if (vv == 4) {
        nn[0].removeAttribute('class')
    }
})

// style font
window.addEventListener('change', () => {
    let vv = $('section.e select:nth-child(2)').val(),
        nn = $('section.t')[0]

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

// size text
window.addEventListener('change', () => {
    let vv = $('section.e select:last-child').val(),
        nn = $('section.t')[0]

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

// notes
document.querySelectorAll('u').forEach(x => {
    x.addEventListener('click', e => {
        document.querySelectorAll('section.m').forEach(x => {
            if (x.id === e.target.id) {
                x.style.cssText = 'opacity: 0; display: block; transition: opacity .4s';

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
    x.forEach(xx => {
        if (xx.isIntersecting) {
            e.unobserve(xx.target);
            setTimeout(() => {
                $('section.b')[0].style.cssText = 'visibility: visible; opacity: 1';
                setTimeout(() => {
                    $('section.b')[0].style.opacity = '0';
    
                    setTimeout(() => {
                        $('section.b')[0].remove()
                    }, 2000)
                }, 15000)
            }, 5000)
        }
    })
}).observe($('#rr')[0])
