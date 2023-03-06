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
                let m = new Image();
                m.src = x.target.dataset.url;
                m.onload = () => {
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
                let m = new Image();
                m.src = x.target.dataset.url;
                m.onload = () => {
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

    $('section.e svg')[0].addEventListener('click', () => {
        if ($('video').prop('muted')) {
            $('video').prop('muted', false);

            $('section.e svg path')[0].setAttribute('fill', 'white')
        } else {
            $('video').prop('muted', true);

            $('section.e svg path')[0].setAttribute('fill', '#ffffff80')
        }
    })

    let vv = document.querySelector('video');
    $('section.e .k .g')[0].addEventListener('touchstart', () => {
        vv.pause()
    })
    $('section.e .k .g')[0].addEventListener('touchend', () => {
        vv.play()
    })
})

window.addEventListener('DOMContentLoaded', () => {
    let a = $('section.e .b a'),
        b = $('section.a')

    a.click(() => {
        b[0].style.cssText = 'opacity: 1; pointer-events: initial';

        setTimeout(() => {
            b[0].style.cssText = '';
        }, 10000)
    })
})

$(document).ready(() => {
    let jj = $('section.c')[0].querySelectorAll('li');

    jj.forEach(x => {
        x.addEventListener('click', () => {
            $('section.c .hhh')[0].classList.remove('hhh');
            x.classList.add('hhh')
        })
    })

    $('section.c ul li')[0].addEventListener('click', () => {
        $('section.f')[0].classList.add('e');
        $('section.e')[0].classList.remove('f');

        $('#ll')[0].innerHTML = `<ul>
            <li>
                <div class="a">
                    <div class="b">
                        <div>
                            <h6>Давно выяснено</h6>
                            <time datetime="2023-02-25T19:46:02Z">8 минут назад</time>
                        </div>
                        <a href="#" data-url="https://media.tenor.com/4JPIAxuBwP4AAAAM/cat-animated-stickers.gif"></a>
                    </div>
                    <h5>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона.</h5>
                </div>
                <div class="f" data-url="https://russiaedu.ru/media/cache/image_md_resize/uploads/upload-images/2019/04/28/79s3CZPkXaw.jpg">
                    <div class="g">
                        <div class="m">
                            <div class="p">
                                <h6>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</h6>
                                <h6>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</h6>
                                <h6>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</h6>
                            </div>
                            <a href="#">
                                <div data-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1WV9cJQRlCCeqSvu1dNAZb6ls-qcqqmTiLQ&usqp=CAU"></div>
                                <div data-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTP4bAILHs6UChbrMFjFX8WEV_wS5fO0QciA&usqp=CAU"></div>
                                <div data-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1UZlSKB-d8Rme5zPjOe0kRSmEQ7U7jJwrbw&usqp=CAU"></div>
                                <div data-url="https://avatars.mds.yandex.net/i?id=53cb73b3116273dc384c00772c75c670-5220865-images-thumbs&n=13&exp=1"></div>
                            </a>
                        </div>
                        <p>Нравится Вам и ещё 2 058</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="a">
                    <div class="b">
                        <div>
                            <h6>Давно выяснено</h6>
                            <time datetime="2023-02-25T19:46:02Z">2 ч назад</time>
                        </div>
                        <a href="#" data-url="https://media.tenor.com/4JPIAxuBwP4AAAAM/cat-animated-stickers.gif"></a>
                    </div>
                    <h5>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона</h5>
                </div>
                <div class="k">
                    <video src="https://video.twimg.com/ext_tw_video/1630145135198478336/pu/pl/YUNhYS6aH8r3q66a.m3u8?variant_version=1&tag=14&container=fmp4" muted playsinline loop></video>
                    <div class="g">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="50" fill="none"/>
                            <path d="M76.3028011,46.4601664 C76.1955651,46.5460179 65.4455473,54.9619491 52.4499935,46.2609026 C43.2621629,40.1090933 34.8080111,40.4572486 29.3340398,41.8305486 C23.513415,43.2919158 19.8528507,46.1402044 19.4547788,46.4601664 C17.7832611,47.8031601 17.5122537,50.252762 18.8494668,51.9315054 C20.1866798,53.6102488 22.625738,53.8824278 24.2972557,52.5394341 C24.4044917,52.4535826 35.1545095,44.0382807 48.1500633,52.7386979 C54.1460707,56.7534286 59.8285386,58.0003178 64.5751264,58 C66.8308451,57.9984706 69.077882,57.7194094 71.2660267,57.1690519 C77.0866515,55.7076847 80.7472158,52.8593961 81.1452877,52.5394341 C82.22657,51.6706696 82.7642307,50.288547 82.5557381,48.9136988 C82.3472455,47.5388505 81.4242746,46.3801486 80.1344996,45.8740649 C78.8447247,45.3679812 77.3840932,45.5914018 76.3028108,46.4601664 L76.3028011,46.4601664 Z" fill="#ffffff80"/>
                        </svg>
                        <div class="m">
                            <div class="p">
                                <h6>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</h6>
                                <h6>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</h6>
                                <h6>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</h6>
                            </div>
                            <a href="#">
                                <div data-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1WV9cJQRlCCeqSvu1dNAZb6ls-qcqqmTiLQ&usqp=CAU"></div>
                                <div data-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTP4bAILHs6UChbrMFjFX8WEV_wS5fO0QciA&usqp=CAU"></div>
                                <div data-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1UZlSKB-d8Rme5zPjOe0kRSmEQ7U7jJwrbw&usqp=CAU"></div>
                                <div data-url="https://avatars.mds.yandex.net/i?id=53cb73b3116273dc384c00772c75c670-5220865-images-thumbs&n=13&exp=1"></div>
                            </a>
                        </div>
                        <p>Нравится 2 058</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="a">
                    <div class="b">
                        <div>
                            <h6>Давно выяснено</h6>
                            <time datetime="2023-02-25T19:46:02Z">8 минут назад</time>
                        </div>
                        <a href="#" data-url="https://media.tenor.com/4JPIAxuBwP4AAAAM/cat-animated-stickers.gif"></a>
                    </div>
                    <h5>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться</h5>
                </div>
                <div class="f" data-url="https://i.pinimg.com/736x/78/07/a6/7807a6632d4a3a914f58b2a47ad6f702.jpg">
                    <div class="g">
                        <div class="m">
                            <div class="p">
                                <h6>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</h6>
                                <h6>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</h6>
                                <h6>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</h6>
                            </div>
                            <a href="#">
                                <div data-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1WV9cJQRlCCeqSvu1dNAZb6ls-qcqqmTiLQ&usqp=CAU"></div>
                                <div data-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTP4bAILHs6UChbrMFjFX8WEV_wS5fO0QciA&usqp=CAU"></div>
                                <div data-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1UZlSKB-d8Rme5zPjOe0kRSmEQ7U7jJwrbw&usqp=CAU"></div>
                            </a>
                        </div>
                        <p>Нравится 2 058</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="a">
                    <div class="b">
                        <div>
                            <h6>Давно выяснено</h6>
                            <time datetime="2023-02-25T19:46:02Z">8 минут назад</time>
                        </div>
                        <a href="#" data-url="https://media.tenor.com/4JPIAxuBwP4AAAAM/cat-animated-stickers.gif"></a>
                    </div>
                    <h5>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона</h5>
                </div>
                <div class="f" data-url="https://avatars.mds.yandex.net/i?id=eb217279872dd9616f76f399f503cd43_l-5234915-images-thumbs&ref=rim&n=13&w=1080&h=1350">
                    <div class="g">
                        <div class="m">
                            <div class="p">
                                <h6>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</h6>
                                <h6>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</h6>
                                <h6>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</h6>
                            </div>
                            <a href="#">
                                <div data-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1WV9cJQRlCCeqSvu1dNAZb6ls-qcqqmTiLQ&usqp=CAU"></div>
                                <div data-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTP4bAILHs6UChbrMFjFX8WEV_wS5fO0QciA&usqp=CAU"></div>
                                <div data-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1UZlSKB-d8Rme5zPjOe0kRSmEQ7U7jJwrbw&usqp=CAU"></div>
                            </a>
                        </div>
                        <p>Нравится 2 058</p>
                    </div>
                </div>
            </li>
        </ul>`

        $(document).ready(() => {
            let ll = new IntersectionObserver((a, b) => {
                a.forEach(x => {
                    if (x.isIntersecting) {
                        let m = new Image();
                        m.src = x.target.dataset.url;
                        m.onload = () => {
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
    })

    $('section.c ul li')[1].addEventListener('click', () => {
        $('section.e')[0].classList.add('f');
        $('section.f')[0].classList.remove('e');

        $('#ll')[0].innerHTML = `<ul><li><a href="book-book.html" data-url="https://i.postimg.cc/FKZLQY7s/111.jpg"><h6>★ 3,1</h6></a>
        <p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона.</p>
    </li>
    <li>
        <a href="book-book.html" data-url="https://i.postimg.cc/FKZLQY7s/111.jpg">
            <h6>★ 3,1</h6>
        </a>
        <p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона.</p>
    </li><li>
    <a href="book-book.html" data-url="https://i.postimg.cc/FKZLQY7s/111.jpg">
        <h6>★ 3,1</h6>
    </a>
    <p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона.</p>
</li><li>
<a href="book-book.html" data-url="https://i.postimg.cc/FKZLQY7s/111.jpg">
    <h6>★ 3,1</h6>
</a>
<p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона.</p>
</li><li>
<a href="book-book.html" data-url="https://i.postimg.cc/FKZLQY7s/111.jpg">
    <h6>★ 3,1</h6>
</a>
<p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона.</p>
</li><li>
<a href="book-book.html" data-url="https://i.postimg.cc/FKZLQY7s/111.jpg">
    <h6>★ 3,1</h6>
</a>
<p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона.</p>
</li><li>
<a href="book-book.html" data-url="https://i.postimg.cc/FKZLQY7s/111.jpg">
    <h6>★ 3,1</h6>
</a>
<p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона.</p></li></ul>`

        $(document).ready(() => {
            let ll = new IntersectionObserver((a, b) => {
                a.forEach(x => {
                    if (x.isIntersecting) {
                        let m = new Image();
                        m.src = x.target.dataset.url;
                        m.onload = () => {
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
    })
})
