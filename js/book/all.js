// title switch
h = () => {
    let a = $('section.e li.a h1')[0],
    b = $('section.e li.a h2')[0];

    setTimeout(() => {
        a.style.opacity = '0';
        setTimeout(() => {
            a.remove()
        }, 800)
        b.removeAttribute('style')
    }, 5000)
}
h()

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
        let a = x.target.closest('.m');

        if (a.querySelector('span') == null) {
            let c = document.createElement('span');
            a.appendChild(c);
            setTimeout(() => {
                a.querySelector('span').remove()
            }, 1000)
        }
    })
})

//current number img
document.querySelectorAll('section.e .d').forEach(x => {
    // x.addEventListener('scroll', x => {
    //     let a = x.target;
    //     for (i=0; i<a.children.length; i++) {
    //         let l = a.children[i].offsetLeft, k = a.scrollLeft;
    //         console.log(l, k, l - k);

    //         if ((a.children[i].offsetLeft - a.scrollLeft) > 0) {
    //             break
    //         }
    //     }
    //     if (i > 0) {
    //         a.nextElementSibling.innerHTML = i+' / 4'
    //     }
    // })

    x.addEventListener('scroll', x => {
        let a = x.target;
        for (t=0; t<a.children.length; t++);
        for (i=0; i<a.children.length; i++) {
            let n = window.innerWidth / 2, k = (a.children[i].offsetLeft + n), j = a.scrollLeft;

            // console.log(k, j);
            if (a.children[i].offsetLeft == a.scrollLeft) {
                a.nextElementSibling.innerHTML = i+1+' / '+t
            }
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
