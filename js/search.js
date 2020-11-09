$('body').bind('touchmove', function(e) {
    e.preventDefault();
});

function sea(){
    $('aside').css({
        'opacity':'1',
        'pointer-events':'all',
        'transition':'all .5s ease 0s'
    });
    $('.includes').css({
        'opacity':'0',
        'transition':'all .5s ease 0s'
    });
    function nosroll(){
        window.scroll(0, 0);
    }
    window.addEventListener('scroll', nosroll);
};
function esc(){
    $('aside').css({
        'opacity':'0',
        'pointer-events':'none'
    });
    $('.includes').css({
        'opacity':'1'
    });
    function nosroll(){
        window.scroll(!0, !0);
    }
    window.addEventListener('scroll', nosroll);
};

var i = document.getElementById('search');
i.onclick('ls', function(){
    console.log('frondet');
});

$('aside').addClass('colorClass', function(d){
    d.css({
        'background-color':'#435'
    });
});

globalThis == this //для различных редакторов, сгруппировать глобальное обращение