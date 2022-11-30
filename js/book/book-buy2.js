window.addEventListener('DOMContentLoaded', () => {
    let v = $('section.ww figcaption button')

    v.click( () => {
        (v[0].textContent === 'ПОДПИСАТЬСЯ') ? v[0].textContent = 'ВЫ ПОДПИСАНЫ' : v[0].textContent = 'ПОДПИСАТЬСЯ';
        (v[0].textContent === 'ПОДПИСАТЬСЯ') ? v[0].classList.toggle('aa') : v[0].classList.toggle('aa')
    })
})
