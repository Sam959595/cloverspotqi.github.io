document.addEventListener('DOMContentLoaded', function() {

    $('.hide button').click(function() {
        $(this).remove();
        $('dl .hide')[0].classList.remove('close');
    });
});