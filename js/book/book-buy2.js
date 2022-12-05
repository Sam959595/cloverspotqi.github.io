window.addEventListener('DOMContentLoaded', () => {
    let bb = window.innerWidth,
    nn = window.innerHeight,
    mm = document.createElement('style')

    document.head.append(mm)
    mm.innerHTML = ':root{--screen-x:' + bb + 'px; --screen-y:' + nn + 'px}'
})

window.addEventListener('DOMContentLoaded', () => {
    let a = $('.string')[0],
    b = $('.string h6')

    if (b.height() > '95') {
        a.classList.add('hide')
    } else {
        return false
    }
    
    $('.string').click( () => {
        a.classList.remove('hide')
        $('.string span').remove()
    })
})

window.addEventListener('DOMContentLoaded', () => {
    let v = $('section.ww figcaption button')

    v.click( () => {
        (v[0].textContent === 'ПОДПИСАТЬСЯ') ? v[0].textContent = 'ВЫ ПОДПИСАНЫ' : v[0].textContent = 'ПОДПИСАТЬСЯ';
        (v[0].textContent === 'ПОДПИСАТЬСЯ') ? v[0].classList.toggle('aa') : v[0].classList.toggle('aa')
    })
})

window.addEventListener('DOMContentLoaded', () => {
    let a = $('#aa')

    a.click( () => {
        a[0].classList.toggle('a')

        console.log('ghb')
    })
})

window.addEventListener('touchstart', x => {
    let a = $('#aa')

    if (x.touches.length === 3) {
        a[0].classList.toggle('a')

        console.log('ghb')
    }
})
