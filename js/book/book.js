window.addEventListener('change', () => {
    let vv = $('#bb').val(),
    nn = $('section.vv');

    if (vv == '1') {
        nn[0].classList.add('yyu');
        nn[0].classList.remove('yyo', 'yyy')
    } else if (vv == '2') {
        nn[0].classList.remove('yyu', 'yyo', 'yyy')
    } else if (vv == '3') {
        nn[0].classList.add('yyy');
        nn[0].classList.remove('yyu', 'yyo')
    } else if (vv == '0') {
        nn[0].classList.add('yyo');
        nn[0].classList.remove('yyu', 'yyy')
    }
})

window.addEventListener('change', () => {
    let vv = $('#nn').val(),
    nn = $('section.vv');

    if (vv == '0') {
        nn[0].classList.add('sss')
    } else {
        nn[0].classList.remove('sss')
    }
})

window.addEventListener('change', () => {
    let vv = $('#ee').val(),
    nn = $('section.vv');

    if (vv == '0') {
        nn[0].classList.add('rrr')
    } else {
        nn[0].classList.remove('rrr')
    }
})
