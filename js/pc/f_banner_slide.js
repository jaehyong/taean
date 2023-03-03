//푸터 바로가기 슬라이드 메뉴
//모바일 + pc
var iw = 0;
var id = 1;
var fbs_auto_play = setInterval("fbs_auto()", 5000);
function fbs_auto(){
  iw = $(".f_banner_slide > li:nth-of-type("+id+")").width();
  $(".f_banner_slide").animate({"left":-iw}, 1000, function(){
    $(".f_banner_slide > li:nth-of-type(1)").appendTo(".f_banner_slide");
    $(".f_banner_slide").css({"left":0});
  })
}

function fbs_auto_rev() {
  $(".f_banner_slide > li:last-of-type").prependTo(".f_banner_slide");
  iw = $(".f_banner_slide > li:nth-of-type("+id+")").width();
  $(".f_banner_slide").css({"left":-iw}).stop().animate({"left":0}, 1000);
}

$(".f_banner_slide").hover(
  function(){
    clearInterval(fbs_auto_play);
  },
  function(){
    fbs_auto_play = setInterval("fbs_auto()", 5000);
  }
);

$(".fbs_prev").click(function(){
  clearInterval(fbs_auto_play);
  fbs_auto_rev();
  $(".f_banner_slide").hover(
    function(){
      clearInterval(fbs_auto_play);
    },
    function(){
      fbs_auto_play = setInterval("fbs_auto()", 5000);
    }
  );
});


$(".fbs_stop").click(function(){
  clearInterval(fbs_auto_play);
  $(".fbs_stop").css({"display":"none"});
  $(".fbs_play").css({"display":"block"});
  $(".f_banner_slide").hover(
  function(){
    clearInterval(fbs_auto_play);
  },
  function(){
    clearInterval(fbs_auto_play);
  }
);
});

$(".fbs_play").click(function(){
  fbs_auto_play = setInterval("fbs_auto()", 5000);
  $(".fbs_play").css({"display":"none"});
  $(".fbs_stop").css({"display":"block"});
  $(".f_banner_slide").hover(
    function(){
      clearInterval(fbs_auto_play);
    },
    function(){
      fbs_auto_play = setInterval("fbs_auto()", 5000);
    }
  );
})

$(".fbs_next").click(function(){
  clearInterval(fbs_auto_play);
  fbs_auto();
  $(".f_banner_slide").hover(
    function(){
      clearInterval(fbs_auto_play);
    },
    function(){
      fbs_auto_play = setInterval("fbs_auto()", 5000);
    }
  );
});





