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
    t = '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100" fill="var(--gray-2)">\
    <g transform="rotate(0 50 50)">\
      <rect x="47" y="29" rx="2.64" ry="2.64" width="6" height="12">\
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.875s" repeatCount="indefinite"></animate>\
      </rect>\
    </g><g transform="rotate(45 50 50)">\
      <rect x="47" y="29" rx="2.64" ry="2.64" width="6" height="12">\
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>\
      </rect>\
    </g><g transform="rotate(90 50 50)">\
      <rect x="47" y="29" rx="2.64" ry="2.64" width="6" height="12">\
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.625s" repeatCount="indefinite"></animate>\
      </rect>\
    </g><g transform="rotate(135 50 50)">\
      <rect x="47" y="29" rx="2.64" ry="2.64" width="6" height="12">\
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>\
      </rect>\
    </g><g transform="rotate(180 50 50)">\
      <rect x="47" y="29" rx="2.64" ry="2.64" width="6" height="12">\
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.375s" repeatCount="indefinite"></animate>\
      </rect>\
    </g><g transform="rotate(225 50 50)">\
      <rect x="47" y="29" rx="2.64" ry="2.64" width="6" height="12">\
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>\
      </rect>\
    </g><g transform="rotate(270 50 50)">\
      <rect x="47" y="29" rx="2.64" ry="2.64" width="6" height="12">\
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.125s" repeatCount="indefinite"></animate>\
      </rect>\
    </g><g transform="rotate(315 50 50)">\
      <rect x="47" y="29" rx="2.64" ry="2.64" width="6" height="12">\
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>\
      </rect>\
    </g>\
    </svg>',
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
            v.html(t);
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