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

// mark read
let x;
$('section.a')[0].addEventListener('dblclick', () => {
    clearTimeout(x)
    $('article h1')[0].classList.contains('a') == true ? ($('article h1')[0].removeAttribute('class'), $('section.a p')[0].innerText = 'Удалено из прочесть позже') : ($('section.a p')[0].innerText = 'Добавлено в прочесть позже', $('article h1')[0].classList.add('a'));
    x = setTimeout(() => {
        $('section.a p')[0].innerText = ''
    }, 3000)
})
