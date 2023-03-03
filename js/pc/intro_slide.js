//태안TV

var ins_width = 0

ins_width = $(".intro_slide_contents_slide_active > li").innerWidth();

var ins_auto_play = 0;
var ins_page = 0;
ins_auto_play = setInterval("ins_auto()", 5000);
function ins_auto(){
  $(".intro_slide_contents_slide_active").animate({"left":-ins_width}, 1000, function(){
    $(".intro_slide_contents_slide_active > li:nth-of-type(1)").appendTo(".intro_slide_contents_slide_active");
    ins_page = $(".intro_slide_contents_slide_active > li:nth-of-type(1)").attr("data-ins");
    $(".isctc_num_auto").text(ins_page);
    $(".intro_slide_contents_slide_active").css({"left":0});
  });
};

function ins_auto_rev(){
  $(".intro_slide_contents_slide_active > li:nth-of-type(6)").prependTo(".intro_slide_contents_slide_active");
  ins_page = $(".intro_slide_contents_slide_active > li:nth-of-type(1)").attr("data-ins");
  $(".isctc_num_auto").text(ins_page);
  $(".intro_slide_contents_slide_active").css({"left":-ins_width}).stop().animate({"left":0}, 1000);
}

$(".intro_slide_contents_slide_active").hover(
  function(){
    clearInterval(ins_auto_play);
  },
  function(){
    ins_auto_play = setInterval("ins_auto()", 5000);
  }
);

$(".ins_prev").click(function(){
  clearInterval(ins_auto_play);
  ins_auto_rev();
  $(".intro_slide_contents_slide_active").hover(
    function(){
      clearInterval(ins_auto_play);
    },
    function(){
      ins_auto_play = setInterval("ins_auto()", 5000);
    }
  );
});

$(".ins_stop").click(function(){
  clearInterval(ins_auto_play);
  $(".ins_stop").css({"display":"none"});
  $(".ins_play").css({"display":"block"});
  $(".intro_slide_contents_slide_active").hover(
    function(){
      clearInterval(ins_auto_play);
    },
    function(){
      clearInterval(ins_auto_play);
    }
  );
});

$(".ins_play").click(function(){
  ins_auto_play = setInterval("ins_auto()", 5000);
  $(".ins_play").css({"display":"none"});
  $(".ins_stop").css({"display":"block"});
  $(".intro_slide_contents_slide_active").hover(
    function(){
      clearInterval(ins_auto_play);
    },
    function(){
      ins_auto_play = setInterval("ins_auto()", 5000);
    }
  );
});

$(".ins_next").click(function(){
  clearInterval(ins_auto_play);
  ins_auto();
  $(".intro_slide_contents_slide_active").hover(
    function(){
      clearInterval(ins_auto_play);
    },
    function(){
      ins_auto_play = setInterval("ins_auto()", 5000);
    }
  );
});

