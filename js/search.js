globalThis == this //для различных редакторов, сгруппировать глобальное обращение

let i = document.getElementById('s');

i.addEventListener('click', function(){
    console.log('click');
})