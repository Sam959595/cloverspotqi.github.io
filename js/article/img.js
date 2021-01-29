$(document).ready(function() {
    let tt = document.querySelectorAll('[data-src]');
    
    function vv(a) {
        let u = a.getAttribute('data-src');
        
        if (!u) {
            return;
        }
        a.src = u;
    };
    
    let bb = {
        threshold: 0,
        rootMargin: '0 0 300px 0'
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