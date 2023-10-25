// tab
let n = 0;
$(window).scroll(() => {
    let s = window.scrollY;

    s <= $(document).height() && s > n ? $('section.a')[0].style = 'pointer-events: none; opacity: 0' : $('section.a')[0].style = 'pointer-events: auto; opacity: 1';

    n = s <= 0 ? 0 : s
})

// share
document.addEventListener('dblclick', () => {
    if (navigator.share) {
        navigator.share({
            title: 'Quack Quack',
            url: 'https://quack.com'
        })
    }
})

// comment
$('section.a span:first-child').click(() => {
    $('section.s')[0].style = 'pointer-events: auto; opacity: 1'
})

// bookmark counter
$('section.a span+span').click(() => {
    let a = $('section.a span+span h6')[0].innerText;
    $('section.a span+span h6')[0].innerText = Number(a) + 1;
    $('section.a span+span h5')[0].classList.toggle('a')
})

// bookmark icon
$('svg').click(() => {
    $('svg path')[0].classList.toggle('b')
})
