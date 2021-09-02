(function ($) {
    $(document).ready(function(){

      // fade in .navbar
      $(function () {
          $(window).scroll(function () {
  
                   // set distance user needs to scroll before we start fadeIn
              if ($(this).scrollTop() > 850) {
                  $('.navbar').fadeOut();
              } else {
                  $('.navbar').fadeIn();
              }
          });
      });
  
  });
    }(jQuery));