//분야별 정보
//pc
var width_scTab = 0;
width_scTab = $("body").width();
$(window).resize(function(){
  width_scTab = $("body").width();
});
var sector_link_num = 0;
var sec_num = 1;

if(width_scTab > 800){

$(".sector_link_txt > li > a").click(function(){
  sector_link_num = $(this).parent("li").index() + 1;
  $(this).parent("li").find("a").addClass("sector_link_txt_select");
  $(this).parent("li").siblings().find("a").removeClass("sector_link_txt_select");

  $("#sector_link_contents_container"+sector_link_num+"").addClass("sector_link_contents_container_show").siblings().removeClass("sector_link_contents_container_show");
});

$(".sector_right").click(function(){
  sec_num++;
  if(sec_num >= 8) {
    sec_num = 1;
    $(".sector_link_txt > li:nth-of-type("+sec_num+") > a").addClass("sector_link_txt_select");
    $(".sector_link_txt > li:nth-of-type("+sec_num+") > a").parent("li").siblings().find("a").removeClass("sector_link_txt_select");
  }
  else {
  $(".sector_link_txt > li:nth-of-type("+sec_num+") > a").addClass("sector_link_txt_select");
  $(".sector_link_txt > li:nth-of-type("+sec_num+") > a").parent("li").siblings().find("a").removeClass("sector_link_txt_select");
  }
  $("#sector_link_contents_container"+sec_num+"").addClass("sector_link_contents_container_show").siblings().removeClass("sector_link_contents_container_show");
});


$(".sector_left").click(function(){
  sec_num--;
  if(sec_num <= 0) {
    sec_num = 7;
    $(".sector_link_txt > li:nth-of-type("+sec_num+") > a").addClass("sector_link_txt_select");
    $(".sector_link_txt > li:nth-of-type("+sec_num+") > a").parent("li").siblings().find("a").removeClass("sector_link_txt_select");
  }
  else {
    $(".sector_link_txt > li:nth-of-type("+sec_num+") > a").addClass("sector_link_txt_select");
    $(".sector_link_txt > li:nth-of-type("+sec_num+") > a").parent("li").siblings().find("a").removeClass("sector_link_txt_select");
  }
  $("#sector_link_contents_container"+sec_num+"").addClass("sector_link_contents_container_show").siblings().removeClass("sector_link_contents_container_show");
});

}
//모바일
else {
  var msctb_Num = 0; //카운트
  var msctb_iw = 0; //너비
  var msctb_id = 0; //인덱스
  var msctb_iw_rev = 0;
  var msc_box = 1;

  $(".sector_right").click(function(){
    msctb_iw = $(".sector_link_txt > li:first-of-type > a").innerWidth();
    msc_box++;
    if(msc_box >= 8) {
      msc_box = 1;
        $(".sector_link_txt").animate({"left": -msctb_iw}, 300, function(){
        $(".sector_link_txt > li:first-of-type").appendTo(".sector_link_txt");
        $(".sector_link_txt").css({"left":0});
        $(".sector_link_txt > li:first-of-type > a").addClass("sector_link_txt_select").parent("li").siblings().find("a").removeClass("sector_link_txt_select");
        $("#sector_link_contents_container"+msc_box+"").addClass("sector_link_contents_container_show").siblings().removeClass("sector_link_contents_container_show");
      });
    }
    else {
      $(".sector_link_txt").animate({"left": -msctb_iw}, 300, function(){
        $(".sector_link_txt > li:first-of-type").appendTo(".sector_link_txt");
        $(".sector_link_txt").css({"left":0});
        $(".sector_link_txt > li:first-of-type > a").addClass("sector_link_txt_select").parent("li").siblings().find("a").removeClass("sector_link_txt_select");
        $("#sector_link_contents_container"+msc_box+"").addClass("sector_link_contents_container_show").siblings().removeClass("sector_link_contents_container_show");
      });
    }
  });

  $(".sector_left").click(function(){
    msctb_iw_rev = $(".sector_link_txt > li:last-of-type > a").innerWidth();
    msc_box--;
    if(msc_box <= 0){
    msc_box = 7; 
    $(".sector_link_txt > li:last-of-type > a").addClass("sector_link_txt_select").parent("li").siblings().find("a").removeClass("sector_link_txt_select");
    $("#sector_link_contents_container"+msc_box+"").addClass("sector_link_contents_container_show").siblings().removeClass("sector_link_contents_container_show");
    $(".sector_link_txt > li:last-of-type").prependTo(".sector_link_txt");
    $(".sector_link_txt").css({"left":-msctb_iw_rev}).animate({"left":"0"}, 300);
  }
  else {
    $(".sector_link_txt > li:last-of-type > a").addClass("sector_link_txt_select").parent("li").siblings().find("a").removeClass("sector_link_txt_select");
    $("#sector_link_contents_container"+msc_box+"").addClass("sector_link_contents_container_show").siblings().removeClass("sector_link_contents_container_show");
    $(".sector_link_txt > li:last-of-type").prependTo(".sector_link_txt");
    $(".sector_link_txt").css({"left":-msctb_iw_rev}).animate({"left":"0"}, 300);
  }
  })

}