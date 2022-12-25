window.addEventListener('DOMContentLoaded', () => {
    let bb = window.innerWidth,
    nn = window.innerHeight,
    mm = document.createElement('style')

    document.head.append(mm)
    mm.innerHTML = ':root{--screen-x:' + bb + 'px; --screen-y:' + nn + 'px}'
})

window.addEventListener('click', () => {
    let a = $('section.mm li:first-child>div>p')[0]

    a.classList.toggle('uu')
})

window.addEventListener('DOMContentLoaded', () => {
    let v = $('section.ww figcaption button')

    v.click( () => {
        (v[0].textContent === 'В ЧИТАТЕЛИ') ? v[0].textContent = 'ЧИТАЮ' : v[0].textContent = 'В ЧИТАТЕЛИ';
        (v[0].textContent === 'В ЧИТАТЕЛИ') ? v[0].classList.toggle('aa') : v[0].classList.toggle('aa')
    })
})

window.addEventListener('touchstart', x => {
    let a = $('section.pp')

    if (x.touches.length === 3) {
        a[0].classList.add('qq')

        setTimeout( () => {
            a[0].classList.remove('qq')
        }, 2000)
    }
})
