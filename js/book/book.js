window.addEventListener('DOMContentLoaded', () => {
    let bb = window.innerWidth,
    mm = document.createElement('style')

    document.head.append(mm)
    mm.innerHTML = ':root{--screen:' + bb + 'px}'
})

window.addEventListener('DOMContentLoaded', () => {
    let a = $('.string')[0],
    b = $('.string h6')

    if (b.height() > '57') {
        a.classList.add('hide')

        b = document.createElement('span')

        b.innerHTML = 'продолжить'
        a.appendChild(b)
    } else {
        return false
    }
    
    $('.string span').click( () => {
        a.classList.remove('hide')
        $('.string span').remove()
    })
})
