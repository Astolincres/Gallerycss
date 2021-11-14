for(let i = 0; i<9; i++){
    $(`.img-${i}`).bind('click', function() {
        $(`.img-${i}`).toggleClass('away');
        $(this).removeClass('away').toggleClass('active');
    });
}