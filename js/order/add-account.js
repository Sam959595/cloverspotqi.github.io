$(window).ready (function () {
    let a = $ ('section.bb input:nth-of-type(1)'),
    b = $ ('section.bb input:nth-of-type(2)') [0],
    n = $ ('section.bb hr:nth-of-type(2)') [0],
    v = $ ('section.gg'),
    c = 'ee',
    r = 'rr';

    a.keydown (function (x) {

        if (x.keyCode === 13) {

            if (this.value.length === 0) {
                return false
            } else {
                b.classList.add(c);
                n.classList.add(r)
            }
        }
    })
});

function ss () {
    let a = $ ('section.bb input:nth-of-type(1)'),
    b = $ ('section.bb input:nth-of-type(2)') [0],
    n = (a || b),
    k = (a && b),
    v = $ ('section.gg') [0];

    n.keydown (function (x) {

        if (x.keyCode === 13 && k.value.length > 0) {
            
        }
    })
}
ss ();

function dd (x) {
    console.log('1');
    x ();
}
dd;

function bb (x, n) {
    console.log(x + n)
}
bb (1, 2);