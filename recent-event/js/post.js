async function getResponse() {
    let t = await fetch('https://sam959595.github.io/cloverspotqi.github.io/json/post.json');
    let i = await t.json();
    i = i.splice(0, 10);

    let r = null;
    let e = document.querySelector('main ul');

    for (r in i) {

        e.innerHTML += `
        <li>
            <a href="${i[r].href}">
                <div>${i[r].title}</div>
            </a>
        </li>`;
        
        i[r];
    };
};

getResponse();