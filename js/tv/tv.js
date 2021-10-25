document.addEventListener('DOMContentLoaded', function () {
    let a = $('.string'),
    b = $('.string div');

    if (b.height() > '72') {
        a[0].classList.add('hide');

        let b = document.createElement('a');

        b.innerHTML = 'далее';
        a[0].appendChild(b);
    };

   $('dl dd.string a').click(function () {
        a[0].classList.remove('hide');
        this.remove();
    });
});
