    //메인 배너 알파갤러리
    //pc + 모바일
    var main_bnr_page = 0;  
    var winWidth_bl = 0;

    $(window).resize(function(){
      winWidth_bl = $(window).width();
      winWidth_bl = $(".bnr_left").width();
      if(winWidth_bl < 801) {
        $(".bnr_left").height(winWidth_bl * 0.435);
        $(".bnr_left_slide").height(winWidth_bl * 0.435 - 30);
        $(".bnr_left_slide > img").height(winWidth_bl * 0.435 - 50);
      }
      else {
        $(".bnr_left").height(440);
        $(".bnr_left_slide").height(440);
        $(".bnr_left_slide > img").height(440);
      }
    });

    function auto(){
      $(".bnr_left_slide > img:nth-of-type(1)").animate({"opacity":"0"}, 1000, function(){
        $(this).appendTo(".bnr_left_slide");
        $(this).css({"opacity":"1"});
        main_bnr_page = $(".bnr_left_slide > img").attr("data-bnr_num");
        $(".main_bnr_num_auto").text(main_bnr_page);
      });
    }

  
    function auto_rev(){
      $(".bnr_left_slide > img:nth-of-type(6)").prependTo(".bnr_left_slide").css({"opacity":"0"}).animate({"opacity":"1"}, 1000);
      };
    //알파갤러리 반복
    var timer = setInterval("auto()", 5000);
    //img에 호버시 알파갤러리 중지
    $(".bnr_left_slide > img").hover(
      function(){
        clearInterval(timer);
      },
      function(){
        timer = setInterval("auto()", 5000);
      }
    )
    
    //일시정지 버튼 
    
    $(".mb_stop").click(function(){
      $(".mb_stop").css({"display":"none"});
      $(".mb_play").css({"display":"block"});
      clearInterval(timer);
      $(".bnr_left_slide > img").hover(
        function(){
          clearInterval(timer);
        },
        function(){
          clearInterval(timer);
        }
      );
    });
  

    //재생 버튼
    
    $(".mb_play").click(function(){
      $(".mb_stop").css({"display":"block"});
      $(".mb_play").css({"display":"none"});
      timer = setInterval("auto()", 5000);
      $(".bnr_left_slide > img").hover(
        function(){
          clearInterval(timer);
        },
        function(){
          timer = setInterval("auto()", 5000);
        }
      );
    });
  

    
    $(".mb_next").click(function(){
      clearInterval(timer);
      auto();
      main_bnr_page = $(".bnr_left_slide > img").attr("data-bnr_num");
      $(".main_bnr_num_auto").text(main_bnr_page);
    });
  

    $(".mb_prev").click(function(){
      clearInterval(timer);
      auto_rev();
      main_bnr_page = $(".bnr_left_slide > img").attr("data-bnr_num");
      $(".main_bnr_num_auto").text(main_bnr_page);
    });
  

    

    