$(document).ready(function () {
    let a = $('section.bb input:first-child'),
    b = $('section.bb hr:nth-of-type(2), section.bb input:last-child')[0],
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