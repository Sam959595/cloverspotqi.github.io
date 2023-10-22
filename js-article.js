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
$('section.a')[0].addEventListener('dblclick', () => {
    $('article h1')[0].classList.contains('a') == true ? ($('article h1')[0].removeAttribute('class'), $('section.a p')[0].innerText = 'Удалено из прочесть позже') : ($('section.a p')[0].innerText = 'Добавлено в прочесть позже', $('article h1')[0].classList.add('a'));
    setTimeout(() => {
        $('section.a p')[0].innerText = ''
    }, 3000)
})

// home button
$('section.a')[0].addEventListener('click', () => {
    $('section.a p')[0].innerHTML = '<a href="html-start.html">Вернуться в Circle</a>';
    setTimeout(() => {
        $('section.a p')[0].innerText = ''
    }, 5000)
})
