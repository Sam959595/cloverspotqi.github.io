






var b = 0;

last = 10;

var medi = new Audio();

var time = document.getElementById('time');
var media = document.getElementById('audio');

medi.addEventListener('timeupdate', function() {

    var s = medi.currentTime / medi.duration;

    time.style.width = s * 100 + '%';
});

$(document).ready(function() {

    $('button').click(function() {

        var a = $(this).parent().children('button').attr('data-url');
        
        $('#audio').attr('src', a);

        document.getElementById('audio').play();
    });
});

function play(i) {

    var a = $(".audio[details-large = '"+i+"']").children('button').attr('data-url');

    $('#audio').attr('src', a);

    document.getElementById('audio').play();
    
    $('.tag').html(media);
}

function next() {

    if(b < 10) {

        b++;

        play(b);
    }
}

function back() {

    if(b > 1) {

        b--;

        play(b);
    }
}