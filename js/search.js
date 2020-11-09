$('body').bind('touchmove', function(e) {
    e.preventDefault();
});

function sea(){
    $('body').css({
        'overflow':'hidden'
    })
    $('aside').css({
        'opacity':'1',
        'pointer-events':'all',
        'transition':'all .5s ease 0s'
    });
    $('.includes').css({
        'opacity':'0',
        'transition':'all .5s ease 0s'
    });
};
function esc(){
    $('body').css({
        'overflow':'auto'
    })
    $('aside').css({
        'opacity':'0',
        'pointer-events':'none'
    });
    $('.includes').css({
        'opacity':'1'
    });
};

globalThis == this //для различных редакторов, сгруппировать глобальное обращение