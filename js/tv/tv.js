document.addEventListener('DOMContentLoaded', function () {
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

document.addEventListener('DOMContentLoaded', function () {
    let a = $('section.ww hr'),
        b = $('section.ww textarea');

    if (b.value.length > 50) {
        a.css('opacity', '1')
        consol.log('plus')
    } else {
        a.css('opacity', '0')
    };
});
