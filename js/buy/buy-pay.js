if (window.ApplePaySession) {
   let n = $('section.zz div apple-pay-button');

   n.click ( () => {
   let p = {
       total: {
           label: 'Магазин',
           amount: 50.00
       },
       countryCode: 'RU',
   currencyCode: 'RUB',
   merchantCapabilities: ['supports3DS'],
   supportedNetworks: ['masterCard', 'visa']
   };

   let b = new window.ApplePaySession(1, p);
   };
}
