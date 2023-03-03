//헤더 언어설정
//pc
$("header .hd_mid .hd_mid_container .hd_mid_right li:nth-of-type(2)").hover(
  function(){
    $(this).children(".lang").stop().slideDown(100);
    $("header .hd_mid .hd_mid_container .hd_mid_right li:nth-of-type(2) a img:nth-of-type(2)").addClass("turn");
  },
  function(){
    $(this).children(".lang").slideUp(100);
    $("header .hd_mid .hd_mid_container .hd_mid_right li:nth-of-type(2) a img:nth-of-type(2)").removeClass("turn");
  }
);

$("header .hd_mid .hd_mid_container .hd_mid_right li:nth-of-type(2) .lang li").hover(
  function(){
    $(this).addClass("lang_sec");
    $("header .hd_mid .hd_mid_container .hd_mid_right li:nth-of-type(2) a img:nth-of-type(2)").addClass("turn");
  },
  function(){
    $(this).removeClass("lang_sec");
    $("header .hd_mid .hd_mid_container .hd_mid_right li:nth-of-type(2) a img:nth-of-type(2)").removeClass("turn");
  }
)