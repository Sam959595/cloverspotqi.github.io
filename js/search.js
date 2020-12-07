document.addEventListener('DOMContentLoaded', function() {

    $('nav span').click(function() {

        $('body')[0].classList.add('search');
        $('aside, section.includes')[0].classList.add('visible');
    });
    $('aside main:first-child div:first-child button').click(function() {

        $('body')[0].classList.remove('search');
        $('aside, section.includes')[0].classList.remove('visible');
    });

    $('aside form input').click(function() {

        $('aside main:first-child div:last-child button')[0].classList.add('hide');
        $('aside main:first-child div:first-child')[0].classList.add('disappear');
    });
    $('aside main:first-child div:last-child button').click(function() {
        
        $('aside main:first-child div:last-child button')[0].classList.remove('hide');
        $('aside main:first-child div:first-child')[0].classList.remove('disappear');
    });
});

globalThis == this //для различных редакторов, сгруппировать глобальное обращение