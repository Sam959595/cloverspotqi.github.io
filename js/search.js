document.addEventListener('DOMContentLoaded', function() {

    $('nav span').click(function() {
        $('body')[0].classList.add('search');

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

    $('aside main:first-child div:last-child button').click(function() {
        $('body')[0].classList.remove('search');

        $('aside main:first-child div:last-child button')[0].classList.remove('hide');

        $('aside main:first-child div:first-child')[0].classList.remove('disappear');
    });

    $('aside form input').click(function() {
        $('aside main:first-child div:last-child button')[0].classList.add('hide');

        $('aside main:first-child div:first-child')[0].classList.add('disappear');
    });
});

globalThis == this //для различных редакторов, сгруппировать глобальное обращение