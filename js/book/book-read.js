window.addEventListener('touchstart', () => {
    $('section.ww').click( () => {
        let vv = $('section.ee'),
        nn = $('section.ww')
    
        vv[0].classList.add('eee')
        nn[0].classList.add('www')
    })
})

window.addEventListener('touchmove', () => {
    let vv = $('section.ee'),
    nn = $('section.ww')

    vv[0].classList.remove('eee')
    nn[0].classList.remove('www')
})

window.addEventListener('DOMContentLoaded', () => {
    let vv = $('section.ee'),
    nn = $('section.ww')

    nn.mouseenter( () => {
        vv[0].classList.add('eee')
        nn[0].classList.add('www')
    })
    vv.mouseleave( () => {
        vv[0].classList.remove('eee')
        nn[0].classList.remove('www')
    })
})

window.addEventListener('change', () => {
    let vv = $('#bb').val(),
    nn = $('section.vv')

    if (vv == '1') {
        nn[0].classList.add('yyo')
        nn[0].classList.remove('yyu', 'yyy')
    } else if (vv == '2') {
        nn[0].classList.add('yyu')
        nn[0].classList.remove('yyo', 'yyy')
    } else if (vv == '3') {
        nn[0].classList.remove('yyu', 'yyo', 'yyy')
    } else if (vv == '4') {
        nn[0].classList.add('yyy')
        nn[0].classList.remove('yyu', 'yyo')
    }
})

window.addEventListener('change', () => {
    let vv = $('#nn').val(),
    nn = $('section.vv')

    if (vv == '1') {
        nn[0].classList.add('zzz')
        nn[0].classList.remove('sss')
    } else if (vv == '2') {
        nn[0].classList.add('sss')
        nn[0].classList.remove('zzz')
    } else if (vv == '3') {
        nn[0].classList.remove('sss', 'zzz')
    }
})

window.addEventListener('change', () => {
    let vv = $('#ee').val(),
    nn = $('body')[0]

    if (vv == '1') {
        nn.classList.add('rrr')
        nn.classList.remove('ttt')

        $('meta[media="(prefers-color-scheme: light)"]').attr('content', 'white')
        $('meta[media="(prefers-color-scheme: dark)"]').attr('content', 'black')
    } else if (vv == '2') {
        nn.classList.add('ttt')
        nn.classList.remove('rrr')

        $('meta[media="(prefers-color-scheme: light)"]').attr('content', '#feddbc')
        $('meta[media="(prefers-color-scheme: dark)"]').attr('content', '#120b08')
    } else if (vv == '3') {
        nn.classList.remove('rrr', 'ttt')

        $('meta[media="(prefers-color-scheme: light)"]').attr('content', '#f2f2f9')
        $('meta[media="(prefers-color-scheme: dark)"]').attr('content', '#1a1a1c')
    }
})
