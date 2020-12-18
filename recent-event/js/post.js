async function getResponse() {
    let t = await fetch('https://sam959595.github.io/cloverspotqi.github.io/json/post.json');
    let i = await t.json();
    i = i.splice(0, 5);

    let r = null;
    let e = document.querySelector('main ul');

    for (r in i) {

        e.innerHTML += `<li><a href="${i[r].href}"><div>${i[r].title}</div></a></li>`;
        i[r];
    };
};

getResponse();

document.addEventListener('DOMContentLoaded', function() {
    $('dl .hide button').click(function() {

        $('dl .hide')[0].classList.remove('close');
        this.remove();
    });
});

$(document).scroll(function() {
    let w = $('article h1').offset();

    if (($(window).height()+$(window).scrollTop() >= w.top) && ($(window).scrollTop() - (w.top + 20) < 0)) {
        $('nav')[0].classList.remove('title');
    }
    else {
        $('nav')[0].classList.add('title');
    }
});