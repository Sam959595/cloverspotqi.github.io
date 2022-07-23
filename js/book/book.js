window.addEventListener('DOMContentLoaded', () => {
    let bb = window.innerWidth,
    mm = document.createElement('style')

    document.head.append(mm)
    mm.innerHTML = ':root{--screen:' + bb + 'px}'
})
