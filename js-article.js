// tab
let n = 0;
$(window).scroll(() => {
    let s = window.scrollY,
    v = $('section.a')[0];

    s <= $(document).height() && s > n ? v.style = 'pointer-events: none; opacity: 0' : v.style = 'pointer-events: auto; opacity: 1';

    n = s <= 0 ? 0 : s
})

// share
$('article').dblclick(() => {
    if (navigator.share) {
        navigator.share({
            title: 'Apple планирует представить MacBook Pro без выемки к 2027 году',
            url: 'https://puk.com'
        })
    }
})

// comment
$('section.a button:last-child').click(() => {
    $('html')[0].style = 'box-sizing: border-box; overflow: hidden';
    $('body')[0].style = 'box-sizing: border-box; overflow: hidden';
    $('section.s')[0].style = 'pointer-events: auto; opacity: 1'
})

$('section.s button').click(() => {
    $('html')[0].removeAttribute('style');
    $('body')[0].removeAttribute('style');
    $('section.s')[0].removeAttribute('style')
})

// counter
$('section.a button:first-child').click(() => {
    let a = $('section.a span:first-child h6')[0].innerText;
    $('section.a button:first-child')[0].innerText = Number(a) + 1;
    $('section.a button:first-child')[0].classList.toggle('a')
})

// textarea
document.querySelectorAll('textarea').forEach(x => {
    x.addEventListener('input', () => {
        x.style.height = 'auto';
        x.style.height = (x.scrollHeight) + 'px';

        let a = $('section.s span')[0];

        if (x.value !== '') {
            a.innerHTML = '💌'
        } else {
            a.innerHTML = ''
        }
    })
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
