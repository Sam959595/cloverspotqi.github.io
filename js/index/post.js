async function sech() {
    let t = await fetch('json/post.json'),
    b = await t.json(),
    e = document.querySelector('.includes ul');

    b = b.splice(0, 5);

    for (let i = 0; i < b.length; i++) {
        e.innerHTML +=
        `<li>
            <a href="${b[i].href}">
                <div>
                    <p>${b[i].date}</p>
                    <h5>${b[i].title}</h5>
                </div>
                <div>
                    <div style="background-image: url(${b[i].image})"></div>
                </div>
            </a>
        </li>`;
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
            console.log('call');
        };
    });
};
sech();

//

window.onload = function() {
    let a = $('blockquote p'),
    b = 'quote';

    a[0].classList.add(b);
};