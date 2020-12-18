document.addEventListener('DOMContentLoaded', function() {

    $('nav ul:last-child li').click(function() {
        
        $('aside')[0].classList.add('visible');
        $('.includes')[0].classList.add('disguise');
    });
    $('aside main:first-child div:first-child span').click(function() {

        $('aside')[0].classList.remove('visible');
        $('.includes')[0].classList.remove('disguise');
    });

    $('aside input').click(function() {

        $('aside main:first-child div:last-child span')[0].classList.add('hide');
        $('aside main:first-child div:first-child')[0].classList.add('disappear');

        document.querySelector('aside main:last-child ul').innerHTML = '<li><a href=""><u>App</u>s</a></li><li><a href=""><u>App</u>lication</a></li><li><a href=""><u>App</u>ly</a></li>';
    });
    $('aside main:first-child div:last-child span').click(function() {

        $('aside main:first-child div:last-child span')[0].classList.remove('hide');
        $('aside main:first-child div:first-child')[0].classList.remove('disappear');
    });
});

async function sech() {
    let t = await fetch('https://sam959595.github.io/cloverspotqi.github.io/json/nav.json'),
    i = await t.json(),
    r = null,
    e = document.querySelector('aside main:last-child ul');

    for (r in i) {

        e.innerHTML += `<li><a href="${i[r].href}">${i[r].title}</a></li>`;
        i[r];
    };
};
sech();

Request.onreadystatuschange = function() {
    if (Request.readyStatus == 1) {
        $('aside form::before')[0].classList.add('load');
    }
    else {
        $(this)[0].classList.remove('load');
    }
};

$(document).ready(function() {
    let i = document.getElementsByClassName('load'),
    t = document.getElementsByTagName('input')[0].value;
    
    console.log(t);
});