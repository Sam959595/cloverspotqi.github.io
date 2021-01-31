$(document).ready(function() {
    let tt = document.querySelectorAll('[data-style]');
    
    function vv(a) {
        let u = a.getAttribute('data-style');
        
        if (!u) {
            return;
        };
        a.style = ;
    };
    
    let bb = {
        threshold: 0,
        rootMargin: '0px'
    };
    
    let ee = new IntersectionObserver((a, b) => {
        a.forEach(c => {
            if (!c.isIntersecting) {
                return;
            } else {
                vv(c.target);
                b.unobserve(c.target);
            };
        });
    }, bb);
    
    tt.forEach(a => {
        ee.observe(a);
    });
});

/*u.forEach((e) => {
    e.setAttribute('style', e.getAttribute('data-style'));
    e.removeAttribite('data-style');
});*/