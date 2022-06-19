document.addEventListener('DOMContentLoaded', () => {
    let a = $('.string'),
    b = $('.string div');

    if (b.height() > '48') {
        a[0].classList.add('hide');

        b = document.createElement('span');

        b.innerHTML = 'читать продолжение';
        a[0].appendChild(b);
    };
    
    $('.string span').click(function () {
        a[0].classList.remove('hide');
        this.remove();
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
