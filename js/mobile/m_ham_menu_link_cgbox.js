var cgbox = 0;
//모바일 햄버게 주메뉴 링크
$("#mm_complains > li > a").click(function(){
  $(this).addClass("chbb").parent("li").siblings().find("a").removeClass("chbb");
});

$("#mm_communication > li > a").click(function(){
  $(this).addClass("chbb").parent("li").siblings().find("a").removeClass("chbb");
});

$("#mm_information > li > a").click(function(){
  $(this).addClass("chbb").parent("li").siblings().find("a").removeClass("chbb");
});

$("#mm_introduce > li > a").click(function(){
  $(this).addClass("chbb").parent("li").siblings().find("a").removeClass("chbb");
});





$("#mm_complains > li:first-of-type > ul > li > a").click(function(){
  cgbox = $(this).parent("li").index() + 1;
  $("#cp_cb_box"+cgbox+"").addClass("cp_contents_box_active").siblings().removeClass("cp_contents_box_active");
});
$("#mm_complains > li:first-of-type > a").click(function(){
  $("#cp_cb_box1").addClass("cp_contents_box_active").siblings().removeClass("cp_contents_box_active");
});


$("#mm_complains > li:nth-of-type(2) > ul > li > a").click(function(){
  cgbox = $(this).parent("li").index() + 1;
  $("#local_tax_box"+cgbox+"").addClass("cp_contents_box_active").siblings().removeClass("cp_contents_box_active");
});
$("#mm_complains > li:nth-of-type(2) > a").click(function(){
  $("#local_tax_box1").addClass("cp_contents_box_active").siblings().removeClass("cp_contents_box_active");
});


$("#mm_complains > li:nth-of-type(3) > a").click(function(){
  $("#passport_box1").addClass("cp_contents_box_active").siblings().removeClass("cp_contents_box_active");
})


$("#mm_complains > li:nth-of-type(4) > ul > li > a").click(function(){
  cgbox = $(this).parent("li").index() + 1;
  $("#e-cp_box"+cgbox+"").addClass("cp_contents_box_active").siblings().removeClass("cp_contents_box_active");
});
$("#mm_complains > li:nth-of-type(4) > a").click(function(){
  $("#e-cp_box1").addClass("cp_contents_box_active").siblings().removeClass("cp_contents_box_active");
});


$("#mm_complains > li:nth-of-type(5) > ul > li > a").click(function(){
  cgbox = $(this).parent("li").index() + 1;
  $("#dec_box"+cgbox+"").addClass("cp_contents_box_active").siblings().removeClass("cp_contents_box_active");
});
$("#mm_complains > li:nth-of-type(5) > a").click(function(){
  $("#dec_box2").addClass("cp_contents_box_active").siblings().removeClass("cp_contents_box_active");
});