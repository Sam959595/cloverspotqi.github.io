window.onload = function() {
    let a = $('blockquote p'),
    b = 'quote';

    a[0].classList.add(b);
};


$(window).ready(function() {
    [].forEach.call($('.includes div[style]'), function(e) {
  
      e.setAttribute('src', e.getAttribute('data-src'));
    
      e.onload = function() {
        e.removeAttribute('data-src');
      };
    });
});