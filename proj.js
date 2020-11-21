$(document).ready(function() {
  $(window).on("scroll", function() {
        if ($(window).scrollTop() >= 50) {
          $('.navbar-brand').addClass('js-scrolling');
           $('.navbar-brand-collapse').addClass('js-scrolling');
          $('.logo').addClass('compressed');
        } else {
          $('.navbar-brand').removeClass('js-scrolling');
           $('.logo').removeClass('compressed');
        }
  });
});