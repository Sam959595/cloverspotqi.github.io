window.onload = function() {
    let a = $('blockquote p'),
    b = 'quote';

    a[0].classList.add(b);

    //

    function tt() {
        let bb = $('.reference ul a')[0],
        vv = $('.includes ul a > div:last-child')[0].offsetWidth;

        for (let i = 0; i < bb.length; i++) {
            bb[i].style.width = vv + 'px';
        }
    }
    tt();
};