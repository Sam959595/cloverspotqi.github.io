async function bb() {
    let t = await fetch('json/general.json'),
    b = await t.json(),
    e = $('.general ul');

    b = b.splice(8, 10);
  
    for (i in b) {
        e[0].innerHTML +=
        `<li>
            <a href='${b[i].href}'>
                <div>
                    <h5>${b[i].title}</h5>
                    <time datetime='${b[i].date}'></time>
                </div>
                <div>
                    <div data-style='background-image: url(${b[i].image})' style='background-image: url(#)'></div>
                </div>
            </a>
        </li>`;
    };
};
bb();

async function vv() {
    let t = await fetch('json/policy.json'),
    b = await t.json(),
    e = $('.policy ul');

    b = b.splice(8, 10);
  
    for (i in b) {
        e[0].innerHTML +=
        `<li>
            <a href='${b[i].href}'>
                <div>
                    <time datetime='${b[i].date}'></time>
                    <h5>${b[i].title}</h5>
                </div>
                <div>
                    <div data-style='background-image: url(${b[i].image})' style='background-image: url(#)'></div>
                </div>
            </a>
        </li>`;
    };
};
vv();