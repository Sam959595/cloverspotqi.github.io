window.addEventListener('DOMContentLoaded', () => {
    let bb = window.innerWidth,
    mm = document.createElement('style')

    document.head.append(mm)
    mm.innerHTML = ':root {--width: calc(' + bb + 'px' + ' - var(--padding) * 2); --width-2: calc((' + bb + 'px' + ' - var(--padding) * 2) / 3 - (24px * 2 / 3))}'
})
