if (window.ApplePaySession) {
   let n = $('section.zz div button:first-child');

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
   };

   let b = new window.ApplePaySession(1, p);

   b.begin();
   };
}
