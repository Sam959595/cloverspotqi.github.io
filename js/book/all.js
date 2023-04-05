$(document).ready(() => {

    // img load
    document.querySelectorAll('[data-img]').forEach(x => {
        new IntersectionObserver((a, b) => {
            a.forEach(x => {
                if (x.isIntersecting) {
                    b.unobserve(x.target);
                    let m = new Image();
                    m.src = x.target.dataset.img;
                    m.onload = () => {
                        x.target.setAttribute('style', 'background-image: url(\'' + x.target.dataset.img + '\')');
                        x.target.removeAttribute('data-img')
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
                    x.target.src = x.target.dataset.vid;
                    let t = setInterval(() => {
                        if (x.target.currentTime > 0) {
                            clearInterval(t);
                            x.target.removeAttribute('data-vid')
                        }
                    }, 500)
                }
            })
        }).observe(x)
    })

    // video observer play/pause
    document.querySelectorAll('video').forEach(x => {
        new IntersectionObserver(a => {
            a.forEach(x => {
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
            $('section.e>svg')[0].setAttribute('fill', 'var(--gray-b)')
        } else {
            $('video').prop('muted', true);
            $('section.e>svg')[0].setAttribute('fill', 'var(--soft-4)')
        }
    })

    // video pause if exit tab
    window.onblur = () => {
        $('video').prop('muted', true);
        $('section.e>svg')[0].setAttribute('fill', 'var(--soft-4)')
    }

    //double-tab for like post
    document.querySelectorAll('section.e div:where(.a, .v)').forEach(x => {
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
            $('section.c .hhh')[0].classList.remove('hhh');
            x.classList.add('hhh')
        })
    })
})
