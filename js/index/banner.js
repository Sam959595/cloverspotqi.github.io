window.onload = function() {
    let a = $('blockquote p'),
    b = 'quote';

    a[0].classList.add(b);
};

//

$(document).ready(function() {
    let tt = document.querySelectorAll('[data-src]');
    
    function vv(a) {
        let u = a.getAttribute('data-src');
        
        if (!u) {
            return;
        }
        a.forEach((e) => {
            e.setAttribute('data-style', e.getAttribute('style'));
            e.removeAttribute('data-style');
        });
    };
    
    let bb = {
        threshold: 0,
        rootMargin: '0px'
    };
    
    const ee = new IntersectionObserver((a, b) => {
        a.forEach(c => {
            if (!c.isIntersecting) {
                return;
            } else {
                vv(c.target);
                b.unobserve(c.target);
            }
        });
    }, bb);
    
    tt.forEach(a => {
        ee.observe(a);
    });
});