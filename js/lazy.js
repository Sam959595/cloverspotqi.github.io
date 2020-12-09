async function getResponse() {
    let t = await fetch('https://sam959595.github.io/cloverspotqi.github.io/json/post.json');
    let i = await t.json();
    i = i.splice(0, 10);

    let key;
    let e = document.querySelector('.includes ul');

    for (key in i) {

        e.innerHTML += `
        <li>
            <a href="${i[key].href}">
                <div style="background-image: url(${i[key].image})"></div>
                <div>
                    <p>${i[key].date}</p>
                    <h5>${i[key].title}</h5>
                </div>
            </a>
        </li>`
        i[key];
    };
};

getResponse();

globalThis == this //для различных редакторов, сгруппировать глобальное обращение