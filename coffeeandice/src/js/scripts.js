$(document).ready(function(){
   // Smooth Scroll
   $("a").on('click', function(event) {
   // Make sure this.hash has a value before overriding default behavior
   if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
         scrollTop: $(hash).offset().top
      }, 650, function(){
         // Add hash (#) to URL when done scrolling (default click behavior)
         window.location.hash = hash;
      });
   } // End if
   });
  // Burger Button Functionality
  $(".nav-menu > li > a").click(function() {
   $("#nav-trigger").prop("checked", false);
  });
   // To-Top Button Sichtbarkeit / Animation
   //Check to see if the window is top if not then display button
   $(window).scroll(function(){
      if ($(this).scrollTop() > 2000) {
         $('#to-top').fadeIn();
      } else {
         $('#to-top').fadeOut();
      }
  });
  // Scrolling verhindern beim Öffnen des Mobile-Menüs
  $("#nav-trigger").change(function() {
   if($(this).is(':checked')) 
      $("body").addClass('fixed'); 
   else 
      $("body").removeClass('fixed');
});
$(".nav-menu > li > a").click(function() {
   $("body").removeClass("fixed");
});
   //Click event to scroll to top
   $('#to-top').click(function(){
         $('html, body').animate({scrollTop : 0},650);
         return false;
   });
 });