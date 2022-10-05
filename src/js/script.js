$(document).ready(function(){
    $('.creative__teams-view').on('click', function() {
        $('.our_work').fadeIn('slow')
    });

    $('.testimonials__wrapper').slick( {
        dots: true,
        prevArrow: '<a class="slick-prev"></a>',
        nextArrow: '<a class="slick-next"></a>'
    })
})