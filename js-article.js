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
$('section.a span:last-child').click(() => {
    $('body')[0].style = 'touch-action: none; overflow: hidden; height: 100vh';
    $('section.s')[0].style = 'pointer-events: auto; opacity: 1'
})

$('button').click(() => {
    $('body')[0].removeAttribute('style');
    $('section.s')[0].removeAttribute('style')
})

// counter
$('section.a span:first-child').click(() => {
    let a = $('section.a span:first-child h6')[0].innerText;
    $('section.a span:first-child h6')[0].innerText = Number(a) + 1;
    $('section.a span:first-child h5')[0].classList.toggle('a')
})

// bookmark
$('section.a span:nth-child(2)').click(() => {
    $('section.a span:nth-child(2) h5')[0].classList.toggle('a')
})

// textarea
document.querySelectorAll('textarea').forEach(x => {
    x.addEventListener('input', () => {
        x.style.height = 'auto';
        x.style.height = (x.scrollHeight) + 'px';

        let a = $('section.s span')[0];

        if (x.value !== '') {
            a.innerHTML = 'Отпра.'
        } else {
            a.innerHTML = ''
        }
    })
})
