let nn = () => {
    let a = $ ('section.bb input:nth-of-type(1)')[0],
    b = $ ('section.bb input:nth-of-type(2)')[0],
    n = $ ('section.bb input'),
    v = $ ('section.gg'),
    p = $ ('section.bb hr:nth-of-type(2)')[0],
    c = 'ee',
    r = 'rr',
    y = '<h6>Введите ключ</h6>',
    q = '<h6>Введите пароль</h6>',
    u = '<h6>Введите ключ и пароль</h6>',
    e = '<h6>Неверный ключ или пароль</h6>',
    g = '<h6>Сбой авторизации</h6>';

    n.keydown ( (x) => {
        let k = (x.keyCode === 13);

        if (k && (p.classList.contains(r)) && (b.value.length === 0) && (a.value.length != 0)) {
            v.html(q)
        } else if (k && (n[0].value.length === 0)) {
            v.html(u)
        } else if (k && (a.value.length != 0)) {
            p.classList.add(r);
            b.classList.add(c)
        } else {
            v.html('')
        }

        if (k && (a.value.length === 0) && (b.value.length != 0)) {
            v.html(y)
        } else if (k && (b.value.length != 0) && (a.value.length != 0)) {
            ( () => {
                let w = localStorage.getItem('username'),
                t = localStorage.getItem('passwork');
        
                $.post('users.php', {
                    w: username,
                    t: password
                });
            })
        }
    });
}

nn();