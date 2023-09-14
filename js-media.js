// img load
document.querySelectorAll('img').forEach(x => {
    new IntersectionObserver((a, b) => {
        a.forEach(x => {
            let a = x.target;
            if (x.isIntersecting) {
                b.unobserve(a);
                let m = new Image();
                m.src = a.dataset.i;
                m.onload = () => {
                    a.src = a.dataset.i;
                    a.removeAttribute('data-i')
                }
            }
        })
    }).observe(x)
})

document.querySelectorAll('video').onclick(x => {
    x.forEach(x => {
        x.target.preventDefault()
    })
})

// video load
document.querySelectorAll('video').forEach(x => {
    new IntersectionObserver((a, b) => {
        a.forEach(x => {
            let a = x.target;
            if (x.isIntersecting) {
                b.unobserve(a);
                a.src = a.dataset.v;
                let t = setInterval(() => {
                    if (a.currentTime > 0) {
                        clearInterval(t);
                        a.removeAttribute('data-v')
                    }
                }, 500)
            }
        })
    }).observe(x)
})

// video observer play/pause
document.querySelectorAll('video').forEach(x => {
    new IntersectionObserver(x => {
        x.forEach(x => {
            if (x.isIntersecting) {
                x.target.play();
                $('section.h')[0].style.cssText = 'opacity: 1; pointer-events: initial';

                setTimeout(() => {
                    $('section.h')[0].removeAttribute('style')
                }, 10000)
            } else {
                x.target.pause()
            }
        })
    }, {
        threshold: .2
    }).observe(x)
})

// video toggle sound
$('section.h')[0].addEventListener('click', () => {
    if ($('video').prop('muted')) {
        $('video').prop('muted', false);
        $('section.e>svg path')[0].setAttribute('stroke', 'white')
    } else {
        $('video').prop('muted', true);
        $('section.e>svg path')[0].setAttribute('stroke', 'var(--soft-4)')
    }
})

// video pause if exit tab browser
window.onblur = () => {
    $('video').prop('muted', true);
    $('section.e>svg path')[0].setAttribute('stroke', 'var(--soft-4)')
}
