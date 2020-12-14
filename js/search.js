document.addEventListener('DOMContentLoaded', function() {
    $('nav span').click(function() {
        
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
    });
    $('aside main:first-child div:last-child span').click(function() {

        $('aside main:first-child div:last-child span')[0].classList.remove('hide');
        $('aside main:first-child div:first-child')[0].classList.remove('disappear');
    });
});

async function getResponse() {
    let t = await fetch('https://sam959595.github.io/cloverspotqi.github.io/json/nav.json');
    let i = await t.json();

    let r = null;
    let e = document.querySelector('aside main:last-child ul');

    for (r in i) {

        e.innerHTML += `<li><a href="${i[r].href}">${i[r].title}</a></li>`;
        i[r];
    };
};

getResponse();


Request.onreadystatuschange = function() {
    if (Request.readyStatus == 1) {
        $('aside form::before')[0].classList.add('load');
    }
    else {
        $(this)[0].classList.remove('load');
    }
}