document.addEventListener('DOMContentLoaded', function() {

    $('nav span').click(function() {
        $('.includes').css({
            'height':'100%',
            'overflow-y':'hidden',
            'poiner-event':'none',
            'display':'none'
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

    $('.string > button').click(function() {
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
        $('.string > button')[0].classList.remove('hide');
    });

    $('form input').click(function() {
        $('.string > button')[0].classList.add('hide');
    });
});

$('.includes')[0].classList.add('search');
$('.includes')[0].classList.remove('search');

globalThis == this //для различных редакторов, сгруппировать глобальное обращение