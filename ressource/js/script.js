
$(document).ready(function(){

  $(".js--waypoint-livres").waypoint(function(direction){
    if (direction=="down"){
      $("nav").addClass("sticky");
    } else{
      $("nav").removeClass("sticky");
    }
  })

  $(".js-scroll-artiste").click(function() {
  $("html, body").animate({scrollTop: $(".js-section-artiste").offset().top}, 2000);
  })

  $(".js-scroll-contact").click(function() {
    $("html, body").animate({scrollTop: $(".js-section-contact").offset().top}, 2000);
  })

  $(".js-scroll-dessins").click(function() {
    $("html, body").animate({scrollTop: $(".js-section-dessins").offset().top}, 2000);
  })

  $(".js-scroll-adresses").click(function() {
    $("html, body").animate({scrollTop: $(".js-section-adresses").offset().top}, 2000);
  })
});
