document.addEventListener('DOMContentLoaded', () => {
    let a = $('.string'),
    b = $('.string div');

    if (b.height() > '60') {
        a[0].classList.add('hide');

        b = document.createElement('span');

        b.innerHTML = 'далее';
        a[0].appendChild(b);
    };
    
    $('.string span').click(function () {
        a[0].classList.remove('hide');
        this.remove();
    });
});

document.addEventListener('keyup', () => {
    let a = $('section.ww textarea')[0].scrollHeight,
    b = $('section.ww hr'),
    c = 279;

    if (a > c) {
        b.css('opacity', '1')
    } else {
        b.css('opacity', '0')
    };
});
