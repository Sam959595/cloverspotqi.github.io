async function bb() {
    let t = await fetch('json/relatively.json'),
    b = await t.json(),
    e = $('.reference ul');

    b = b.splice(0, 8);
  
    for (i in b) {
        e[0].innerHTML +=
        `<li>
            <a href='${b[i].href}'>
                <div data-style='background-image: url(${b[i].image})' style='background-image: url(#)'></div>
                <div>
                    <h5>${b[i].title}</h5>
                    <p>${b[i].details}</p>
                </div>
            </a>
        </li>`;
    };
};
bb();