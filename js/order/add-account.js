let ff = () => {
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
}

ff();

let nn = () => {
    let w = localStorage.getItem('username'),
    t = localStorage.getItem('passwork'),
    a = $ ('section.bb input:nth-of-type(1)'),
    b = $ ('section.bb input:nth-of-type(2)'),
    n = $ ('section.bb input'),
    v = $ ('section.gg');

    n.keydown ( (x) => {
        let m = (x.keyCode === 13);
        
        if (m && (a[0].value.length === 0) && (b.value != 0)) {
            v.html('<h6>Введите ключ</h6>')
        } else if (m && (a[0].value != 0) && (b[0].value.length === 0)) {
            v.html('<h6>Введите пароль</h6>')
        } else if (m && (n[0].value.length === 0)) {
            v.html('<h6>Введите ключ и пароль</h6>')
        } else if (m && (n[0].value != 0)) {
            v.html('')
        } else {
            v.html('<h6>Неверный ключ или пароль</h6>')
        }
    });
}

nn();