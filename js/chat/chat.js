window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('textarea').forEach(el => {
        el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
        el.classList.add('auto');
        el.addEventListener('input', e => {
            el.style.height = 'auto';
            el.style.height = (el.scrollHeight) + 'px';
        });
    });
})

document.addEventListener('keyup', () => {
    let a = $('textarea')[0],
    b = $('section.nn button')

    if (a.value.length > 0) {
        b[0].classList.add('qqq')
    } else {
        b[0].classList.remove('qqq')
    }
})
