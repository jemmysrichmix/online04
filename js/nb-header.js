$(".menu-sm").click(

  function(){
    if ($(".menu-box").width() == 0) {
      $(".menu-box").animate(
        {
          width: '100%'
        }
      );
      $("body").css("overflow-y", "hidden");
      //$("body").css("filter", "blur(8px)");
      //$("body").css("-webkit-filter", "blur(8px)");
    } else {
      $(".menu-box").animate(
        {
          width: '0'
        }
      );
      $("body").css("overflow-y", "scroll");
    }
  }
);

function closeMenu(){
  $(".menu-box").animate(
    {
      width: '0'
    }
  );
  $("body").css("overflow-y", "scroll");
}

function closeBilling(){
  $(".customer-forms").slideUp("slow");
  $("body").css("overflow-y", "visible");
}

function showBilling(){
  $(".customer-forms").fadeIn("slow");
  $("body").css("overflow-y", "hidden");
}
