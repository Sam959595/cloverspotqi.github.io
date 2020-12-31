var er = 2;

$(window).scroll(function() {
    let e = 2;

    if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
        $.ajax({
            url: 'json/post.json',
            method: 'post',
            data: ('er' : er),
            beforeSend: function() {

            }.done(function(data) {
                data = jQuery.parseJSON(data);
            });

            if (data.length > 0) {
                $.each(data, function(index, data) {

                });
            };
        });
    };
});

//

$(window).scroll(function() {
    let w = $('blockquote'),
    p = $('nav ul'),
    u = 'title';

    if ($(window).scrollTop() > w.height()) {
        p[0].classList.add(u);
    } else {
        p[0].classList.remove(u);
    };
});

//

window.onload = function() {
    $('blockquote p')[0].classList.add('quote');
};