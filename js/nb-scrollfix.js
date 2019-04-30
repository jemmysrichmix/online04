var categoryBox=$(".main-header");
$(window).scroll(
  function(){
    var scroll = $(window).scrollTop();
    if (scroll) {
      $(".main-header").addClass("fixed");
    }else {
      $(".main-header").removeClass("fixed");
    }
  }
);
