// img load
document.querySelectorAll('img').forEach(x => {
    new IntersectionObserver((a, b) => {
        a.forEach(x => {
            if (x.isIntersecting) {
                b.unobserve(x.target);
                let m = new Image();
                m.src = x.target.dataset.i;
                m.onload = () => {
                    x.target.src = x.target.dataset.i;
                    x.target.removeAttribute('data-i')
                }
            }
        })
    }).observe(x)
})

// video load
document.querySelectorAll('video').forEach(x => {
    new IntersectionObserver((a, b) => {
        a.forEach(x => {
            if (x.isIntersecting) {
                b.unobserve(x.target);
                x.target.src = x.target.dataset.v;
                let t = setInterval(() => {
                    if (x.target.currentTime > 0) {
                        clearInterval(t);
                        x.target.removeAttribute('data-v')
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
                $('section.e>svg')[0].style.cssText = 'opacity: 1; pointer-events: initial'
            } else {
                x.target.pause();
                $('section.e>svg')[0].removeAttribute('style')
            }
        })
    }, {
        threshold: .6
    }).observe(x)
})

// video toggle sound
$('section.e>svg')[0].addEventListener('click', () => {
    if ($('video').prop('muted')) {
        $('video').prop('muted', false);
        $('section.e>svg path')[0].setAttribute('stroke', 'white')
    } else {
        $('video').prop('muted', true);
        $('section.e>svg path')[0].setAttribute('stroke', 'var(--soft-4)')
    }
})

// video pause if exit tab
window.onblur = () => {
    $('video').prop('muted', true);
    $('section.e>svg path')[0].setAttribute('stroke', 'var(--soft-4)')
}

//double-tab for like post
document.querySelectorAll('section.e .m').forEach(x => {
    x.addEventListener('dblclick', x => {
        if (x.target.querySelector('span') == null) {
            let c = document.createElement('span');
            x.target.appendChild(c);
            setTimeout(() => {
                x.target.querySelector('span').remove()
            }, 1000)
        }
    })
})

// sign in
$('section.e :where(.a, .v) a').click(() => {
    $('section.a')[0].style.cssText = 'opacity: 1; pointer-events: initial';

    setTimeout(() => {
        $('section.a')[0].style.cssText = '';
    }, 20000)
})

// nav toggle tab
$('section.c')[0].querySelectorAll('li').forEach(x => {
    x.addEventListener('click', () => {
        $('section.c .f')[0].removeAttribute('class')
        x.classList.add('f')
    })
})

document.querySelectorAll('section.e .n').forEach(x => {
    new IntersectionObserver(x => {
        let t;
        x.forEach(x => {
            if (x.isIntersecting) {
                setInterval(() => {
                    if (x.target.firstElementChild.disabled === false) {
                        console.log('f');
                        x.target.firstElementChild.disabled = true;
                        x.target.firstElementChild.style.opacity = '0';
                        x.target.lastElementChild.style.opacity = '1'
                    } else {
                        console.log('e');
                        x.target.firstElementChild.disabled = false;
                        x.target.firstElementChild.style.opacity = '1';
                        x.target.lastElementChild.style.opacity = '0'
                    }
                }, 8000)
            } else {
                clearInterval(t)
            }
        })
    }).observe(x)
})
