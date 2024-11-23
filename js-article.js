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
    $('body')[0].style = 'overflow: hidden; height: 100vh';
    $('section.s')[0].style = 'pointer-events: auto; opacity: 1'
})

$('section.s button').click(() => {
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
