// tab
let n = 0;
$(window).scroll(() => {
    let s = window.scrollY;

    if (s <= $(document).height() && s > n) {
        $('section.a')[0].style = 'pointer-events: none; opacity: 0'
    } else {
        $('section.a')[0].style = 'pointer-events: auto; opacity: 1'
    }

    n = s <= 0 ? 0 : s
})

// share
$('article')[0].addEventListener('dblclick', () => {
    if (navigator.share) {
        navigator.share({
            title: 'Quack Quack',
            url: 'https://quack.com'
        })
    }
})

// bookmark
$('section.a span+span')[0].addEventListener('click', () => {
    $('section.a span+span h5')[0].classList.contains('a') ? $('section.a span+span h5')[0].removeAttribute('class') : $('section.a span+span h5')[0].classList.add('a')
})

// bookmark
$('svg')[0].addEventListener('click', () => {
    $('svg path')[0].classList.contains('b') ? $('svg path')[0].removeAttribute('class') : $('svg path')[0].classList.add('b')
})
