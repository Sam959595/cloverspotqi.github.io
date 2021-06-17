let ss = () => {
    let pp = $('section.pp ul'),
    vv = $('section.vv'),
    tt = '<p>Нет добавленных заметок</p>';

    if (pp[0].classList.contains('li')) {
        return true
    } else {
        vv.html(tt)
    }
}
ss();

$('section.pp button').click( (x) => {
    x.preventDefault();
    $('section.pp li')[0].remove();
})