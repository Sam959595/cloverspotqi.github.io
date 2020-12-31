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

// * // * //

$(window).scroll(function() {

    if($(window).scrollTop() + $(window).height() >= $(document).height()) {
        let n = $('footer'),
        m = 'load';

        $.ajax({
            url: 'json/post.json',
            method: 'post',
            data: 10,
            beforeSend: function() {
                n[0].classList.add(m);
                inProgress = true;
            },
            complete: function() {
                n[0].classList.remove(m);
            }
        }).done(function() {
            i = i.splice(0, 10);
            
            for (r in i) {
                e.innerHTML += `<li><a href="${i[r].href}"><div data-img="${i[r].image}" style="background-image: url(${i[r].image})"></div><div><p>${i[r].date}</p><h5>${i[r].title}</h5></div></a></li>`;
            };
        })
    } else {
        console.log('null');
    };
});

async function sech() {
    let t = await fetch('json/post.json'),
    i = await t.json(),
    r = null,
    e = document.querySelector('.includes ul');

    i = i.splice(0, 10);

    for (r in i) {

        e.innerHTML += `<li><a href="${i[r].href}"><div data-img="${i[r].image}" style="background-image: url(${i[r].image})"></div><div><p>${i[r].date}</p><h5>${i[r].title}</h5></div></a></li>`;
    };
};
sech();

async function sech() {
    let t = await fetch('json/post.json'),
    b = await t.json(),
    e = document.querySelector('.includes ul');
    
    b = b.splice(0, 2);

    for (let i = 0; i < b.length; i++) {
        e.innerHTML += `<li><a href="${b[i].href}"><div style="background-image: url(${b[i].image})"></div><div><p>${b[i].date}</p><h5>${b[i].title}</h5></div></a></li>`;
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
            b = b.splice(0, 1);
        };
    });
};
sech();