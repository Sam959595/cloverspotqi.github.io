window.addEventListener('DOMContentLoaded', () => {
    let aa = window.innerWidth,
    mm = document.createElement('style')

    document.head.append(mm)
    mm.innerHTML = ':root{--screen:' + aa + 'px}'
})
