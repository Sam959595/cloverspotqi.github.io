$(document).ready(function () {
    let a = $('section.bb input:first-child'),
    b = $('section.bb input:last-child')[0],
    c = 'ee';

    a.keydown(function(e) {
        if (e.keyCode === 13) {
            b.classList.add(c);
        }
    });
});