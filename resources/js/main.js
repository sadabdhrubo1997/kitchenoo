$(document).ready(function(){

    $('#testimonial_slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrow: true,
        prevArrow: $('#slider_left_btn'),
        nextArrow: $('#slider_right_btn')
      });


});