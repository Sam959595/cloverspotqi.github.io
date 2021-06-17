$('section.pp button').click( (x) => {
    x.preventDefault();
    $('section.pp li')[0].remove();
})