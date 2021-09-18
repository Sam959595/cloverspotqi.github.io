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

    let p = $('section.zz li:last-child'),
        j = $('section.zz li:last-child h6'),
        f = 'active';

    p.click( () => {
        if (j[0].classList.contains(f) == false) {
            j[0].classList.add(f);
            } else {
                  j[0].classList.remove(f);
         }
    });
});

if (window.ApplePaySession) {
   let n = $('section.zz div button:first-child');

   let p = $('section.zz li:last-child'),
       j = $('section.zz li:last-child h6'),
       f = 'active';

   ( () => {
        if (j[0].classList.contains(f) == false) {
            n[0].setAttribute(disabled, disabled);
            } else {
                  return true;
         }
    });

   n.click( () => {
   let p = {
       total: {
           label: 'Магазин',
           amount: 899
       },
       countryCode: 'RU',
   currencyCode: 'RUB',
   merchantCapabilities: ['supports3DS'],
   supportedNetworks: ['masterCard', 'visa']
   }

   let b = new window.ApplePaySession(1, p);

   b.begin();
   });
}
