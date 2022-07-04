window.addEventListener('change', () => {
    let vv = $('#bb').val(),
    nn = $('section.vv')

    if (vv == '1') {
        nn[0].classList.add('yyu')
        nn[0].classList.remove('yyo', 'yyy')
    } else if (vv == '2') {
        nn[0].classList.remove('yyu', 'yyo', 'yyy')
    } else if (vv == '3') {
        nn[0].classList.add('yyy')
        nn[0].classList.remove('yyu', 'yyo')
    } else if (vv == '0') {
        nn[0].classList.add('yyo')
        nn[0].classList.remove('yyu', 'yyy')
    }
})

window.addEventListener('change', () => {
    let vv = $('#nn').val(),
    nn = $('section.vv')

    if (vv == '0') {
        nn[0].classList.add('sss')
    } else {
        nn[0].classList.remove('sss')
    }
})

window.addEventListener('change', () => {
    let vv = $('#ee').val(),
    nn = $('body')

    if (vv == '0') {
        nn[0].classList.add('rrr')
    } else {
        nn[0].classList.remove('rrr')
    }

    if (vv == '0') {
        $('meta[media="(prefers-color-scheme: light)"]').attr('content', '#feddbc')
        $('meta[media="(prefers-color-scheme: dark)"]').attr('content', '#120b08')
    } else {
        $('meta[media="(prefers-color-scheme: light)"]').attr('content', '#f2f2f9')
        $('meta[media="(prefers-color-scheme: dark)"]').attr('content', '#1a1a1c')
    }
})

document.addEventListener('DOMContentLoaded', () => {
    $('section.ww').click( () => {
        let vv = $('section.ee'),
        nn = $('section.ww')
    
        vv[0].classList.add('eee')
        nn[0].classList.add('www')
    })
})

window.addEventListener('DOMContentLoaded', () => {
    let vv = $('section.ee'),
    nn = $('section.ww')
    
    nn.mouseenter(() => {
        vv[0].classList.add('eee')
        nn[0].classList.add('www')

        nn[0].style.pointerEvents = 'none'
    })
    vv.mouseleave(() => {
        vv[0].classList.remove('eee')
        nn[0].classList.remove('www')

        setTimeout(() => {
            nn[0].style.pointerEvents = ''
        }, 500)
    })
})

window.addEventListener('touchmove', () => {
    let vv = $('section.ee'),
    nn = $('section.ww')

    vv[0].classList.remove('eee')
    nn[0].classList.remove('www')
})
