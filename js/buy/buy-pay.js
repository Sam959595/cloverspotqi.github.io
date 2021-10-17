document.addEventListener('DOMContentLoaded', function () = {
    let a = $('dl dd.string'),
    b = $('dl dd.string div'),
    c = $('dl dd.string a');

    if (b.height() > '72') {
        a[0].classList.add('hide');

        let b = document.createElement('a');

        b.innerHTML = 'далее';
        a[0].appendChild(b);
    };

   c.click( () => {
        a[0].classList.remove('hide');
        this.remove();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    let o = $('section.bb div button:last-child'),
    e = $('section.zz div button:last-child'),
    h = $('html'),
    b = $('body'),
    z = $('section.zz'),
    n = 'no-scroll',
    v = 'visible';

    o.click( () => {
        h[0].classList.add(n);
        b[0].classList.add(n);
        z[0].classList.add(v);
    });
    e.click( () => {
        h[0].classList.remove(n);
        b[0].classList.remove(n);
        z[0].classList.remove(v);
    });

    let j = $('section.zz li:last-child h6'),
        k = $('section.zz div button:first-child'),
        f = 'active';

    j.click( () => {
        if (j[0].classList.contains(f) === false) {
            j[0].classList.add(f);
            k[0].removeAttribute('disabled', 'disabled');
            } else {
                  j[0].classList.remove(f);
                  k[0].setAttribute('disabled', 'disabled');
         }
    });
});

if (window.ApplePaySession) {
   let n = $('section.zz div button:first-child');

   n.click( () => {
   let p = {
       total: {
           label: 'Kilugi Inc.',
           amount: 899.00
       },
       countryCode: 'RU',
       currencyCode: 'RUB',
       merchantCapabilities: ['supports3DS'],
       supportedNetworks: ['masterCard', 'visa']
       };

   let b = new window.ApplePaySession(1, p);
   b.begin();

   });
}
