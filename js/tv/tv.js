window.addEventListener('DOMContentLoaded', () => {
    let a = $('.string'),
    b = $('.string div');

    if (b.height() > '51') {
        a[0].classList.add('hide');

        b = document.createElement('span');

        b.innerHTML = 'продолжить';
        a[0].appendChild(b)
    } else {
        return false
    };
    
    $('.string span').click(function () {
        a[0].classList.remove('hide');
        this.remove()
    });
});

document.addEventListener('keyup', () => {
    let a = $('section.ww textarea')[0],
    b = $('section.ww hr');

    if (a.scrollHeight > a.clientHeight) {
        b.css('opacity', '1')
    } else {
        b.css('opacity', '0')
    };
});
