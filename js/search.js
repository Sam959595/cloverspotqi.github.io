$('body').bind('touchmove', function(e) {
    e.preventDefault();
});

var i = document.getElementById('search');
i.addEventListener('click', function(){
    console.log('cli')
});

$('aside').addClass('colorClass', function(d){
    d.css({
        'background-color':'#435'
    });
});

globalThis == this //для различных редакторов, сгруппировать глобальное обращение