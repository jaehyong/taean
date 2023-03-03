//모바일 햄버거메뉴 활성화 / 비활성화

var mm_mv_box = 0;
mm_mv_box = $("body").width();
$(window).resize(function(){
  mm_mv_box = $("body").width();
});

$(".mm_close").click(function(){
  $(".mob_menu_container").animate({"left":"100%"}, 300);
  $(".pc_all_container").animate({"left":"0"}, 300);
  $("body").css({"overflow":"visible"});
  $(".pc_blind").css({"display":"none"});
});

$(".mm_open").click(function(){
  $("body").css({"overflow":"hidden"});
  if(mm_mv_box <= 360) {
    $(".mob_menu_container").animate({"left":"10px"}, 300);
    $(".pc_all_container").animate({"left":-350}, 300)
    $(".pc_blind").css({"display":"block"});
  }
  else {
    $(".mob_menu_container").animate({"left":"0px"}, 300);
    $(".pc_all_container").animate({"left":-360}, 300)
    $(".pc_blind").css({"display":"block"}); 
  }
})

