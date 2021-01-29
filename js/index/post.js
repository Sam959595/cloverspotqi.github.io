async function sech() {
    let t = await fetch('json/general.json'),
    b = await t.json(),
    e = $('.general ul')[0];

    b = b.splice(0, 8);
  
    for (let i = 0; i < b.length; i++) {
        e.innerHTML +=
        `<li>
            <a href='${b[i].href}'>
                <div>
                    <time datetime='${b[i].date}'></time>
                    <h5>${b[i].title}</h5>
                </div>
                <div>
                    <div data-style='background-image: url(${b[i].image})'></div>
                </div>
            </a>
        </li>`;
    };

    //
  
    $(window).scroll(function() {
      if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
        console.log('call');
      };
    });
};
sech();

//

async function sef() {
    let t = await fetch('json/policy.json'),
    b = await t.json(),
    e = $('.policy ul')[0];

    b = b.splice(0, 8);
  
    for (i in b) {
        e.innerHTML +=
        `<li>
            <a href='${b[i].href}'>
                <div>
                    <time datetime='${b[i].date}'></time>
                    <h5>${b[i].title}</h5>
                </div>
                <div>
                    <div data-style='background-image: url(${b[i].image})'></div>
                </div>
            </a>
        </li>`;
    };
};
sef();