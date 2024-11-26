// tab
let n = 0;
$('section.a').scroll(() => {
    let t = $('section.a')[0].scrollTop,
    e = $('section.b')[0],
    w = $('section.a')[0].scrollHeight;
    
    t > n && t <= w ? e.style = 'pointer-events: none; opacity: 0' : e.style = 'pointer-events: auto; opacity: 1';
    
    n = t <= 0 ? 0 : t
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
$('section.b button:last-child').click(() => {
    $('section.a')[0].style = 'position: fixed; overflow: auto';
    $('section.s')[0].style = 'pointer-events: auto; opacity: 1'
})

$('section.s button').click(() => {
    $('section.a')[0].removeAttribute('style');
    $('section.s')[0].removeAttribute('style')
})

// // counter
// $('section.b button:first-child').click(() => {
//     let a = $('section.b span:first-child h6')[0].innerText;
//     $('section.b button:first-child')[0].innerText = Number(a) + 1;
//     $('section.b button:first-child')[0].classList.toggle('a')
// })

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

// // video load
// document.querySelectorAll('video').forEach(x => {
//     new IntersectionObserver((a, b) => {
//         a.forEach(x => {
//             let a = x.target;
//             if (x.isIntersecting) {
//                 b.unobserve(a);
//                 a.src = a.dataset.v;
//                 let t = setInterval(() => {
//                     if (a.currentTime > 0) {
//                         clearInterval(t);
//                         a.removeAttribute('data-v')
//                     }
//                 }, 500)
//             }
//         })
//     }).observe(x)
// })

// // video observer play/pause
// document.querySelectorAll('video').forEach(x => {
//     new IntersectionObserver(x => {
//         x.forEach(x => {
//             if (x.isIntersecting) {
//                 x.target.play();
//                 $('section.h')[0].style.cssText = 'opacity: 1; pointer-events: initial'
//             } else {
//                 x.target.pause();
//                 $('section.h')[0].removeAttribute('style')
//             }
//         })
//     }, {
//         threshold: .2
//     }).observe(x)
// })

// // video toggle sound
// $('section.h')[0].addEventListener('click', () => {
//     if ($('video').prop('muted')) {
//         $('video').prop('muted', false);
//         $('section.h svg')[0].setAttribute('opacity', '.4')
//     } else {
//         $('video').prop('muted', true);
//         $('section.h svg')[0].setAttribute('opacity', '.1')
//     }
// })

// // video pause if exit tab browser
// window.onblur = () => {
//     $('video').prop('muted', true);
//     $('section.h svg')[0].setAttribute('opacity', '.1')
// }
