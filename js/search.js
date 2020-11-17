document.addEventListener('DOMContentLoaded', function() {

    $('nav span').click(function() {
        $('body').css({
            'overflow':'hidden',
            'height':'100%'
        });
        $('aside').css({
            'opacity':'1',
            'pointer-events':'all',
            'transition':'all .5s ease 0s'
        });
        $('.includes').css({
            'opacity':'0',
            'transition':'all .5s ease 0s'
        });
    });

    $('.search button').click(function() {
        $('body').css({
            'overflow':'auto',
            'height':'auto'
        });
        $('aside').css({
            'opacity':'0',
            'pointer-events':'none'
        });
        $('.includes').css({
            'opacity':'1'
        });
    });
});

globalThis == this //для различных редакторов, сгруппировать глобальное обращение