window.addEventListener('DOMContentLoaded', () => {
    let a = $('section.ww h1')

    setTimeout( () => {
        a[0].classList.toggle('aa')
        setTimeout( () => {
            a[0].remove()
        }, 2000)
    }, 3000)
})

window.addEventListener('DOMContentLoaded', () => {
    let a = $('.string')[0],
    b = $('.string h6')

    if (b.height() > '57') {
        a.classList.add('hide')

        b = document.createElement('span')

        b.innerHTML = 'далее'
        a.appendChild(b)
    } else {
        return false
    }
    
    $('.string span').click( () => {
        a.classList.remove('hide')
        $('.string span').remove()
    })
})
