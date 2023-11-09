// tab
let n = 0;
$(window).scroll(() => {
    let s = window.scrollY;

    s <= $(document).height() && s > n ? $('section.a')[0].style = 'pointer-events: none; opacity: 0' : $('section.a')[0].style = 'pointer-events: auto; opacity: 1';

    n = s <= 0 ? 0 : s
})

// share
$('article').dblclick(() => {
    if (navigator.share) {
        navigator.share({
            title: 'Quack Quack',
            url: 'https://quack.com'
        })
    }
})

// comment
$('section.a span:first-child').click(() => {
    $('body')[0].style = 'overflow: hidden; height: 100vh';
    $('section.s')[0].style = 'pointer-events: auto; opacity: 1'
})

// exit comment
$('section.j').click(() => {
    $('body')[0].removeAttribute('style');
    $('section.s')[0].removeAttribute('style')
})

// counter
$('section.a span:nth-child(2)').click(() => {
    let a = $('section.a span:nth-child(2) h6')[0].innerText;
    $('section.a span:nth-child(2) h6')[0].innerText = Number(a) + 1;
    $('section.a span:nth-child(2) h5')[0].classList.toggle('a')
})

// bookmark
$('section.a span:last-child').click(() => {
    $('section.a span:last-child h5')[0].classList.toggle('a')
})
