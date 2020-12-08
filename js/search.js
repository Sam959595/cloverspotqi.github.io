document.addEventListener('DOMContentLoaded', function() {

    $('nav span').click(function() {

        $('aside')[0].classList.add('visible');
        $('.includes')[0].classList.add('disguise');
    });
    $('aside main:first-child div:first-child button').click(function() {

        $('aside')[0].classList.remove('visible');
        $('.includes')[0].classList.remove('disguise');
    });

    $('aside input').click(function() {

        $('aside main:first-child div:last-child span')[0].classList.add('hide');
        $('aside main:first-child div:first-child')[0].classList.add('disappear');
    });
    $('aside main:first-child div:last-child span').click(function() {

        $('aside main:first-child div:last-child span')[0].classList.remove('hide');
        $('aside main:first-child div:first-child')[0].classList.remove('disappear');
    });
});

globalThis == this //для различных редакторов, сгруппировать глобальное обращение