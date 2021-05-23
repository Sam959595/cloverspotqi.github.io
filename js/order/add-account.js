$(document).ready(function () {
    let a = $('section.bb label:nth-of-type(1) input'),
    b = $('section.bb label:nth-of-type(2) input')[0],
    n = $('section.bb hr:nth-of-type(2)')[0],
    c = 'ee',
    r = 'rr';

    a.keydown(function(e) {

        if (e.keyCode === 13) {

            if (this.value.length === 0) {
                return false;
            } else {
                b.classList.add(c);
                n.classList.add(r);
            }
        }
    });
});