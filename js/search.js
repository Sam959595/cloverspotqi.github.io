document.addEventListener('DOMContentLoaded', function() {
    let a = $('nav span'),
    b = $('aside'),
    c = $('aside main:first-child div:first-child span'),
    d = $('.includes'),
    e = $('aside input'),
    r = $('aside main:first-child div:last-child span'),
    i = $('aside main:first-child div:first-child');

    a.click(function() {
        
        b[0].classList.add('visible');
        d[0].classList.add('disguise');
    });
    c.click(function() {

        b[0].classList.remove('visible');
        d[0].classList.remove('disguise');
    });

    e.click(function() {

        r[0].classList.add('hide');
        i[0].classList.add('disappear');

        document.querySelector('aside main:last-child ul').innerHTML = '<li><a href=""><u>App</u>s</a></li><li><a href=""><u>App</u>lication</a></li><li><a href=""><u>App</u>ly</a></li>';
    });
    r.click(function() {

        r[0].classList.remove('hide');
        i[0].classList.remove('disappear');
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