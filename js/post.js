async function getResponse() {
    let t = await fetch('https://sam959595.github.io/cloverspotqi.github.io/json/post.json');
    let i = await t.json();
    i = i.splice(0, 10);

    let r = null;
    let e = document.querySelector('.includes ul');

    for (r in i) {

        e.innerHTML +=
        `<li>
            <a href="${i[r].href}">
                <div style="background-image: url(${i[r].image})"></div>
                <div>
                    <p>${i[r].date}</p>
                    <h5>${i[r].title}</h5>
                </div>
            </a>
        </li>`;

        i[r];
    };
};

getResponse();