$(document).ready(function () {
    let a = $('section.bb label:first-child input'),
    b = $('section.bb label:last-child input')[0],
    c = 'ee';

    a.keydown(function(e) {

        if (e.keyCode === 13) {

            if (this.value.length === 0) {
                return false;
            } else {
                b.classList.add(c);
            }
        }
    });
});