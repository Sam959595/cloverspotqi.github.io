window.addEventListener('DOMContentLoaded', () => {
    let v = $('section.ww figcaption button')

    v.click( () => {
        (v[0].textContent === 'ПОДПИСАТЬСЯ') ? v[0].textContent = 'ВЫ ПОДПИСАНЫ' : v[0].textContent = 'ПОДПИСАТЬСЯ';
        (v[0].textContent === 'ПОДПИСАТЬСЯ') ? v[0].classList.toggle('aa') : v[0].classList.toggle('aa')
    })
})

window.addEventListener('DOMContentLoaded', () => {
    let b = $('#aa')

    b.click( () => {
        b[0].classList.toggle('a')
    })
})

window.addEventListener('touchstart', x => {
    b = $('#aa')

    if (x.touches.length === 3) {
        $('#aa')[0].classList.toggle('a')
    }
})
