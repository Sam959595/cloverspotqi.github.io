window.addEventListener('DOMContentLoaded', () => {
    let v = $('section.ww figcaption button')

    v.click( () => {
        (v[0].textContent === 'ПОДПИСАТЬСЯ') ? v[0].textContent = 'ВЫ ПОДПИСАНЫ' : v[0].textContent = 'ПОДПИСАТЬСЯ';
        (v[0].textContent === 'ПОДПИСАТЬСЯ') ? v[0].classList.toggle('aa') : v[0].classList.toggle('aa')
    })
})

window.addEventListener('DOMContentLoaded', () => {
    let a = $('#uu'),
    b = $('#aa')

    b.click( () => {
        a[0].classList.toggle('u')
        b[0].classList.toggle('a')

        console.log('ghb')
    })
})
