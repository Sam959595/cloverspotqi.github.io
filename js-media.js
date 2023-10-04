// tab
let n = 0;
$(window).scroll( () => {
    let s = window.scrollY;

    if (s <= $(document).height() && s > n) {
        $('section.a')[0].style = 'pointer-events: none; opacity: 0'
    } else {
        $('section.a')[0].style = 'pointer-events: auto; opacity: 1'
    }

    n = s <= 0 ? 0 : s
})

// home button
$(window).scroll( () => {
    if (window.scrollY < -20) {
        
        let t = setInterval(() => {
            if (window.scrollY < -20) {
                $('section.j a')[0].style = 'pointer-events: auto; opacity: 1';

                setTimeout(() => {
                    $('section.j a')[0].removeAttribute('style')
                }, 5000)
            } else {
                clearInterval(t)
            }
        }, 800)
    }
})

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
                $('section.h')[0].style.cssText = 'opacity: 1; pointer-events: initial'
            } else {
                x.target.pause();
                $('section.h')[0].removeAttribute('style')
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
        $('section.h svg')[0].setAttribute('opacity', '.4')
    } else {
        $('video').prop('muted', true);
        $('section.h svg')[0].setAttribute('opacity', '.1')
    }
})

// video pause if exit tab browser
window.onblur = () => {
    $('video').prop('muted', true);
    $('section.h svg')[0].setAttribute('opacity', '.1')
}
