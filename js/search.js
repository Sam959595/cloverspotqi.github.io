var i = document.getElementById('s');

i.addEventListener('click', function(){
    console.log('click');
})

let s = $('body');

$('body').addClass('color', function(d){
    d.css({
        'background-color':'#435'
    });
});

$('body').bind('touchmove', function(e) {
    e.preventDefault();
});

globalThis == this //для различных редакторов, сгруппировать глобальное обращение