$('body').bind('touchmove', function(e) {
    e.preventDefault();
});

var i = document.getElementById('s');
i.addEventListener('click', function(){
    console.log('click');
});

$('aside').addClass('colorClass', function(d){
    d.css({
        'background-color':'#435'
    });
});

globalThis == this //для различных редакторов, сгруппировать глобальное обращение