$(document).ready(function () {
    let a = $('section.bb input:nth-child(2)'),
    b = $('section.bb input:nth-child(3)')[0],
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