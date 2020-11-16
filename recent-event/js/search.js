document.addEventListener('DOMContentLoaded', function() {
    $('.hide button').click(function(){
        $('.hide div').css({
            'max-height':'none',
            '-webkit-mask':'none'
        });
        $(this).remove()
    });
});