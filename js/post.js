async function sech() {
    let t = await fetch('https://sam959595.github.io/cloverspotqi.github.io/json/post.json'),
    i = await t.json(),
    r = null,
    e = document.querySelector('.includes ul');

    i = i.splice(0, 10);

    for (r in i) {

        e.innerHTML += `<li><a href="${i[r].href}"><div style="background-image: url(${i[r].image})"></div><div><p>${i[r].date}</p><h5>${i[r].title}</h5></div></a></li>`;
        i[r];
    };
};
sech();