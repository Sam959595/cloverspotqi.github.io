document.addEventListener('DOMContentLoaded', function () {
    let a = $('.string'),
    b = $('.string div');

    if (b.height() > '60') {
        a[0].classList.add('hide');

        let b = document.createElement('span');

        b.innerHTML = 'далее';
        a[0].appendChild(b);
    };

   $('.string span').click(function () {
        a[0].classList.remove('hide');
        this.remove();
    });
});
