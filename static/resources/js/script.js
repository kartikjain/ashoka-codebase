// scripiting file in support of waypoints

$(document).ready(function() {
  // -----for sticky navigation----//
  $(".js--section--our_vision").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "70px"
    }
  );

  // -----for scroll on apply button----- //

  $(".js--scroll--to--apply_form").click(function() {
    $("html,body").animate(
      { scrollTop: $(".js--section--apply_form").offset().top },
      1000
    );
  });

  // ==========================navigation scroll start=========================
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            800,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  // ==========================navigation scroll start=========================

  // =======================animation_on _scroll_start=========================
  $(".js--wp1--our_vision").waypoint(function(direction) {

      if(direction == 'down'){
        $(".js--wp1--our_vision").addClass('animated fadeIn');
      }else if(direction == 'up'){
        $(".js--wp1--our_vision").addClass('animated fadeIn');
      }
    },{
        offset:"30%"
    }
  );




  $(".js--wp2--about_ashoka").waypoint(function(direction) {

    if(direction == 'down'){
      $(".js--wp2--about_ashoka").addClass('animated fadeIn');
    }else if(direction == 'up'){
      $(".js--wp2--about_ashoka").addClass('animated fadeIn');
    }
  },{
      offset:"30%"
  }
);




$(".js--wp3--wayforward").waypoint(function(direction) {

    if(direction == 'down'){
      $(".js--wp3--wayforward").addClass('animated fadeIn');
    }else if(direction == 'up'){
      $(".js--wp3--wayforward").addClass('animated fadeIn');
    }
  },{
      offset:"30%"
  }
);




$(".js--wp4--img1").waypoint(function(direction) {

    $(".js--wp4--img1").addClass('animated pulse');
  },{
      offset:"30%"
  }
);




$(".js--wp4--img2").waypoint(function(direction) {

    $(".js--wp4--img2").addClass('animated pulse');
    }
  ,{
      offset:"30%"
  }
);




$(".js--wp4--img3").waypoint(function(direction) {

    $(".js--wp4--img3").addClass('animated pulse');
    }
  ,{
      offset:"30%"
  }
);




$(".js--wp4--img4").waypoint(function(direction) {

    $(".js--wp4--img4").addClass('animated pulse');
    }
  ,{
      offset:"30%"
  }
);
  // ==========================animation_on _scroll_end=========================
});
