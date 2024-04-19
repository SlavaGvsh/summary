$(document).ready(function() {
    $('.title__link').click(function(event) {
      //  $('.icon').toggleClass('active');
       $(this).parent().next('.sub-text').toggleClass("active");
       $(this).parent().prev('.icon').toggleClass("active");
      //  $('body').toggleClass('lock');
 
    });
 });
 