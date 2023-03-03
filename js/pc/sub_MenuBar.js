//헤더 메뉴바
var sub_Num = 0;

$(".hd_menu_main > li").hover(function(){
  sub_Num = $(this).index() + 1;
});

$(".hd_menu_main > li").hover(
  function(){
    $("#menu_sub"+sub_Num+"").stop().slideDown(500);
  },
  function(){
    $("#menu_sub"+sub_Num+"").stop().slideUp(500);
  }
);
