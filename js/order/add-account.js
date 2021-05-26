let nn = () => {
    let a = $ ('section.bb input:nth-of-type(1)'),
    b = $ ('section.bb input:nth-of-type(2)'),
    n = $ ('section.bb input'),
    v = $ ('section.gg'),
    p = $ ('section.bb hr:nth-of-type(2)'),
    c = 'ee',
    r = 'rr',
    y = '<h6>Введите ключ</h6>',
    q = '<h6>Введите пароль</h6>',
    u = '<h6>Введите ключ и пароль</h6>';

    n.keydown ( (x) => {
        let k = (x.keyCode === 13);
        
        if (k && a[0].value.length === 0) {
            v.html(u)
        } else if (k && a[0].value.length != 0) {
            p[0].classList.add(r);
            b[0].classList.add(c)
        } else {
            v.html('')
        }

        if (k && a[0].value.length === 0 && b[0].value.length != 0) {
            v.html(y)
        } else if (k && b[0].value.length === 0 && a[0].value.length) {
            v.html(q)
        }
    });

    ( () => {
        let w = localStorage.getItem('username'),
        t = localStorage.getItem('passwork');

        $.post('user.php', {
            w: username,
            t: password
        });
    })
}

nn();