window.addEventListener('DOMContentLoaded', () => {
    let bb = window.innerWidth,
    nn = window.innerHeight,
    mm = document.createElement('style')

    document.head.append(mm)
    mm.innerHTML = ':root{--screen-x:' + bb + 'px; --screen-y:' + nn + 'px}'
})

window.addEventListener('DOMContentLoaded', () => {
    let a = $('section.ww figcaption button')

    a.click( () => {
        (a[0].textContent === 'В ЧИТАТЕЛИ') ? a[0].textContent = 'ЧИТАЮ' : a[0].textContent = 'В ЧИТАТЕЛИ';
        (a[0].textContent === 'В ЧИТАТЕЛИ') ? a[0].classList.toggle('aa') : a[0].classList.toggle('aa')
    })
})

window.addEventListener('DOMContentLoaded', () => {
    let a = $('#ii')

    a.click( () => {
        $('section.mm>ul>li:first-child>div')[0].classList.add('uu')
        $('#ii')[0].classList.add('uu')
    })
})

window.addEventListener('touchstart', x => {
    let a = $('section.pp')

    if (x.targetTouches.length === 3) {
        a[0].classList.add('qq')

        setTimeout( () => {
            a[0].classList.remove('qq')
        }, 2000)
    }
})

window.addEventListener('touchstart', x => {
    if (x.targetTouches.length === 2) {
        location.href = 'https://sam959595.github.io/cloverspotqi.github.io/book-account.html'
    }
})

window.onload = () => {
    let jj = q => {
        let cc;
        
        if (cc) {
            cc.classList.add('uu');
        }
        cc = q;
        cc.classList.add('uu');
    }

    $('#tt')[0].onclick = x => {
        let aa = x.target;

        while (aa != this) {
            if (aa.tagName == 'H6') {
                jj(aa);

                return;
            };

            aa = aa.parentNode;
        }
    }
}
