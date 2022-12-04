window.addEventListener('DOMContentLoaded', () => {
    let v = $('section.ww figcaption button')

    v.click( () => {
        (v[0].textContent === 'ПОДПИСАТЬСЯ') ? v[0].textContent = 'ВЫ ПОДПИСАНЫ' : v[0].textContent = 'ПОДПИСАТЬСЯ';
        (v[0].textContent === 'ПОДПИСАТЬСЯ') ? v[0].classList.toggle('aa') : v[0].classList.toggle('aa')
    })
})

window.addEventListener('DOMContentLoaded', () => {
    let a = $('#aa'),
    b = $('#bb')

    a.click( () => {
        a[0].classList.toggle('a')
        b[0].classList.toggle('a')
    })
})

window.addEventListener('touchstart', x => {
    let a = $('#aa')

    if (x.touches.length === 3) {
        a[0].classList.toggle('a')
    }
})
