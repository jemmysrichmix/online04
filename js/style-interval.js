// WARNING: HEADER SET interval


setInterval(
  function(){
    setTimeout(
      function(){
        $("#header-email-send").css("color","#ce005b");
        $("#header-email-usa").css("color","#ce005b");
        $("#header-email-message").css("color","#ce005b");
      }
    ,1000);

    setTimeout(
      function(){
        $("#header-email-usa").css("color","rgba(255,255,255,0.7)");
        $("#header-email-send").css("color","rgba(255,255,255,0.7)");
        $("#header-email-message").css("color","rgba(255,255,255,0.7)");
      }
    ,2000);

    etTimeout(
      function(){
        $("#header-email-message").css("color","rgba(255,255,255,0.7)");
      }
    ,3000);
  }
  , 3000);
