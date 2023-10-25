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

// bookmark counter
$('section.a span+span')[0].addEventListener('click', () => {
    let a = $('section.a span+span h6')[0].innerText;
    let b = Number(a) + 1;
    $('section.a span+span h6')[0].innerText = b;
    console.log(b);
    $('section.a span+span h5')[0].classList.toggle('a');
})

// bookmark icon
$('svg')[0].addEventListener('click', () => {
    $('svg path')[0].classList.toggle('b')
})
