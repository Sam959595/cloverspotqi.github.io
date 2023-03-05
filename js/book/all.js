// document.addEventListener('DOMContentLoaded', () => {
//     let vv = async () => {
//         let t = await fetch('/book/json-book.json'),
//         b = await t.json();
        
//         b = b.splice(0, 8);

//         for (a in b) {
//             $('#kk')[0].innerHTML +=
//             `<li>
//             <div class="a">
//                 <div class="b">
//                     <div>
//                         <h6>${b[a].gg}</h6>
//                         <time datetime="${b[a].tt}">8 минут назад</time>
//                     </div>
//                     <a href="#" data-url="${b[a].ii}"></a>
//                 </div>
//                 <h5>${b[a].kk}</h5>
//             </div>
//             <div class="f" data-url="${b[a].jj}">
//                 <div class="g">
//                     <div class="m">
//                         <div class="p">
//                             <h6>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</h6>
//                             <h6>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</h6>
//                             <h6>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</h6>
//                         </div>
//                         <a href="#">
//                             <div data-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1WV9cJQRlCCeqSvu1dNAZb6ls-qcqqmTiLQ&usqp=CAU"></div>
//                             <div data-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTP4bAILHs6UChbrMFjFX8WEV_wS5fO0QciA&usqp=CAU"></div>
//                             <div data-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1UZlSKB-d8Rme5zPjOe0kRSmEQ7U7jJwrbw&usqp=CAU"></div>
//                             <div data-url="https://avatars.mds.yandex.net/i?id=53cb73b3116273dc384c00772c75c670-5220865-images-thumbs&n=13&exp=1"></div>
//                         </a>
//                     </div>
//                     <p>Нравится Вам и ещё 2 058</p>
//                 </div>
//             </div>
//             </li>`
//         }
//     }
//     vv()
// })

// all, lazy load image url(a)
$(document).ready(() => {
    let ll = new IntersectionObserver((a, b) => {
        a.forEach(x => {
            if (x.isIntersecting) {
                let mm = new Image();
                mm.src = x.target.dataset.url;
                mm.onload = () => {
                    x.target.setAttribute('style', 'background-image: url(\'' + x.target.dataset.url + '\')');
                    x.target.removeAttribute('data-url')
                };

                b.unobserve(x.target)
            }
        })
    })

    document.querySelectorAll('[data-url]').forEach(x => {
        ll.observe(x)
    })
})

// all, lazy load image src(img)
$(document).ready(() => {
    let ll = new IntersectionObserver((a, b) => {
        a.forEach(x => {
            if (x.isIntersecting) {
                let mm = new Image();
                mm.src = x.target.dataset.src;
                mm.onload = () => {
                    x.target.src = x.target.dataset.src;
                    x.target.removeAttribute('data-src')
                };

                b.unobserve(x.target)
            }
        })
    })

    document.querySelectorAll('[data-src]').forEach(x => {
        ll.observe(x)
    })
})
// all, back library
window.addEventListener('touchstart', x => {
    if (x.targetTouches.length === 3) {
        location.href = 'https://sam959595.github.io/cloverspotqi.github.io/book-library.html'
    }
})

// start, tags inset background
// window.addEventListener('DOMContentLoaded', () => {
//     let d = $('#yy'),
//         a = $('section.ll svg'),
//         k = $('html')[0],
//         b = $('body')[0],
//         c = $('section.ll')[0]

//     d.click(() => {
//         k.style.cssText = 'overflow: hidden; height: 100%';
//         b.style.cssText = 'overflow: hidden; height: 100%';
//         c.style.cssText = 'pointer-events: auto; opacity: 1'
//     })
//     a.click(() => {
//         k.removeAttribute('style');
//         b.removeAttribute('style');
//         c.removeAttribute('style')
//     })
// })

// author, button follow
// window.addEventListener('click', () => {
//     let a = $('section.ww figcaption button')[0]

//     a.click(() => {
//         (a.textContent === 'В ЧИТАТЕЛИ') ? a.textContent = 'ЧИТАЮ' : a.textContent = 'В ЧИТАТЕЛИ';
//         (a.textContent === 'В ЧИТАТЕЛИ') ? a.classList.toggle('aa') : a.classList.toggle('aa')
//     })
// })

// book, button follow
// window.onload = () => {
//     $('section.ee')[0].onclick = x => {
//         let aa = x.target;

//         while (aa) {
//             if (aa.tagName == 'BUTTON') {
//                 (aa.textContent === 'СЛЕДОВАТЬ') ? aa.textContent = 'ВЫ СЛЕДУЕТЕ' : aa.textContent = 'СЛЕДОВАТЬ';
//                 (aa.textContent === 'СЛЕДОВАТЬ') ? aa.removeAttribute('style') : aa.style.color = 'var(--gray)'
//             };

//             aa = aa.parentNode;
//         }
//     }
// }

// library, buttom edit
window.addEventListener('DOMContentLoaded', () => {
    let a = $('section.ee>button')

    a.click(() => {
        $('section.ee')[0].classList.toggle('gg');
        (a[0].textContent === 'ПРАВИТЬ') ? a[0].textContent = 'ГОТОВО' : a[0].textContent = 'ПРАВИТЬ';
    })
})

// book, comment hide tap
// window.onload = () => {
//     let jj = x => {
//         let cc;

//         if (cc) {
//             cc.classList.add('uu');
//         }
//         cc = x;
//         cc.classList.add('uu');
//     }

//     $('#tt')[0].onclick = x => {
//         let aa = x.target;

//         while (aa != this) {
//             if (aa.tagName == 'H6') {
//                 jj(aa);

//                 return;
//             };

//             aa = aa.parentNode;
//         }
//     }
// }

// double-tap post
$(document).ready(() => {
    $('section.dd li')[0].addEventListener('dblclick', () => {

        if ($('section.dd li')[0].querySelector('span') === null) {
            //contain: paint $('section.dd li')[0].style.position = 'relative';

            let vv = document.createElement('span');
            $('section.dd li')[0].appendChild(vv);

            $('section.dd li span')[0].style.cssText = 'opacity: 1; transition: opacity .2s ease-out';

            setTimeout(() => {
                $('section.dd li span')[0].style.opacity = '0';

                setTimeout(() => {
                    $('section.dd li span')[0].remove();
                    $('section.dd li')[0].removeAttribute('style');
                }, 200)
            }, 900)
        } else {
            return false;
        }
    })
})

// all, lazy load image url(a)
$(document).ready(() => {
    let ll = new IntersectionObserver(a => {
        a.forEach(x => {
            if (x.isIntersecting) {
                x.target.play();

            } else {
                x.target.pause();
            }
        })
    }, { threshold: 0.5 })
    document.querySelectorAll('video').forEach(x => {
        ll.observe(x)
    })

    $('section.dd svg')[0].addEventListener('click', () => {
        if ($('video').prop('muted')) {
            $('video').prop('muted', false);

            $('section.dd svg path')[0].setAttribute('fill', 'white')
        } else {
            $('video').prop('muted', true);

            $('section.dd svg path')[0].setAttribute('fill', '#ffffff80')
        }
    })

    let vv = document.querySelector('video');
    $('section.dd .k .g')[0].addEventListener('touchstart', () => {
        vv.pause();
    })
    $('section.dd .k .g')[0].addEventListener('touchend', () => {
        vv.play();
    })
})

window.addEventListener('DOMContentLoaded', () => {
    let a = $('section.dd li'),
        b = $('section.rr')

    a.click(() => {
        b[0].style.cssText = 'opacity: 1; pointer-events: initial';

        setTimeout(() => {
            b[0].style.cssText = '';
            setTimeout(() => {
                b[0].removeAttribute('style');
            }, 400)
        }, 10000)
    })
})

$(document).ready( () => {
    $('#yy').click( () => {
        
    })
})
