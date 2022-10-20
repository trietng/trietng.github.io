$('.navbar .dropdown').hover(function() {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(50).slideDown();
    
}, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(50).slideUp();
});

$('.navbar .dropdown-menu').on({
    mouseenter: function() {
        $('#contact').css('color', 'seagreen');
    },
    mouseleave: function() {
        $('#contact').removeAttr('style');
    }
});