// Animate CSS by Daniel Eden: https://github.com/daneden/animate.css

$(document).ready( function() {
  $("#left .content").click( function() {
    $("#left-overlay").addClass("animated fadeInLeft open").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("animated fadeInLeft");
    });
    $("#left-overlay .product-content").addClass("animated flipInY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("animated flipInY");
    }); 
  });
  $("#left-overlay .close-icon").click( function() {
      $("#west-overlay").addClass("animated flipOutY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("animated flipOutY open");
      }); 
  });
  $("#right .content").click( function() {
    $("#right-overlay").addClass("animated fadeInRight open").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass("animated fadeInRight");
    }); 
    $("#right-overlay .product-content").addClass("animated flipInY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("animated flipInY");
     }); 
  });
  $("#right-overlay .close-icon").click( function() {
    $("#right-overlay").addClass("animated flipOutY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass("animated flipOutY open");
    });     
  });  
});