//푸터 메뉴바
//모바일 + pc
$(".gov_link").hover(
  function(){
    $(".gov_link_box").css({"display":"block"});
    $(".gov_link > a > img").css({"transform":"scaleY(-1)"});
  },
  function(){
    $(".gov_link_box").css({"display":"none"});
    $(".gov_link > a > img").css({"transform":"scaleY(1)"});
  }
);

$(".ch_link").hover(
  function(){
    $(".ch_link_box").css({"display":"block"});
    $(".ch_link > a > img").css({"transform":"scaleY(-1)"});
  },
  function(){
    $(".ch_link_box").css({"display":"none"});
    $(".ch_link > a > img").css({"transform":"scaleY(1)"});
  }
);

$(".tae_link").hover(
  function(){
    $(".tae_link_box").css({"display":"block"});
    $(".tae_link > a > img").css({"transform":"scaleY(-1)"});
  },
  function(){
    $(".tae_link_box").css({"display":"none"});
    $(".tae_link > a > img").css({"transform":"scaleY(1)"});
  }
);

$(".rel_link").hover(
  function(){
    $(".rel_link_box").css({"display":"block"});
    $(".rel_link > a > img").css({"transform":"scaleY(-1)"});
  },
  function(){
    $(".rel_link_box").css({"display":"none"});
    $(".rel_link > a > img").css({"transform":"scaleY(1)"});
  }
);