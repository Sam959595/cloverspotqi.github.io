globalThis == this //для различных редакторов, сгруппировать глобальное обращение

var i = document.getElementById('s');

i.addEventListener('click', function(){
    console.log('click');
})

let e = $("body");
e.addClass("color", function(){
    e.css({
        'background-color':'#435'
    });
});