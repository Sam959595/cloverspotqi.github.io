$(window).scroll(function() {
    let w = $('article h1'),
    p =  $('nav'),
    n = 'title';

    if ($(window).scrollTop() > w.height()) {
        p[0].classList.add(n);
    } else {
        p[0].classList.remove(n);
    };
});

//

async function articleDown() {
    let t = await fetch('json/post.json'),
    i = await t.json(),
    e = document.querySelector('main ul'),
    r = null;
    
    i = i.splice(0, 5);

    for (r in i) {

        e.innerHTML += `<li><a href="${i[r].href}"><div>${i[r].title}</div></a></li>`;
    };
};
articleDown();

//

document.addEventListener('DOMContentLoaded', function() {
    $('dl .hide button').click(function() {

        $('dl .hide')[0].classList.remove('close');
        this.remove();
    });
});

//



$(window).scroll(function() {

    if($(window).scrollTop() + $(window).height() >= $(document).height()) {
        let n = $('footer'),
        m = 'load';

        $.ajax({
            url: 'https://sam959595.github.io/cloverspotqi.github.io/json/post.json',
            method: 'get',
            data: 10,
            beforeSend: function() {
                n[0].classList.add(m);
            },
            complete: function() {
                n[0].classList.remove(m);
            }
        });

        console.log('upload');
    } else {
        console.log('null');
    };
});