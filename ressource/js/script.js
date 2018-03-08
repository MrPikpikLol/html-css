
$(document).ready(function(){

  $(".js--waypoint-livres").waypoint(function(direction){
    if (direction=="down"){
      $("nav").addClass("sticky");
    } else{
      $("nav").removeClass("sticky");
    }
  })
});
