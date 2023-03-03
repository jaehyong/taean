//오감만족

var tour = 0;
var tl = 0;
tour = setInterval("tour_op()", 5000);
function tour_op(){
  $(".tour_img > img:nth-of-type(1)").animate({"opacity":0}, 1000, function(){
    $(this).appendTo(".tour_img");
    $(this).css({"opacity":"1"});
    tl = $(".tour_img > img").attr("data-tour")
    $(".tour_control_num_auto").text(tl);
  });
}

function tour_oprev(){
  $(".tour_img > img:nth-of-type(4)").prependTo(".tour_img").css({"opacity":"0"}).animate({"opacity":"1"}, 1000);
}

$(".tour_img > img").hover(
  function(){
    clearInterval(tour);
  },
  function(){
    tour = setInterval("tour_op()", 5000);
  }
);

$(".tour_prev").click(function(){
  clearInterval(tour);
  tour_oprev();
  $(".tour_img > img").hover(
  function(){
    clearInterval(tour);
  },
  function(){
    tour = setInterval("tour_op()", 5000);
  }
);
tl = $(".tour_img > img").attr("data-tour")
    $(".tour_control_num_auto").text(tl);
});

$(".tour_next").click(function(){
  clearInterval(tour);
  tour_op();
  $(".tour_img > img").hover(
  function(){
    clearInterval(tour);
  },
  function(){
    tour = setInterval("tour_op()", 5000);
  }
);
tl = $(".tour_img > img").attr("data-tour")
$(".tour_control_num_auto").text(tl);
});

$(".tour_stop").click(function(){
  clearInterval(tour);
  $(".tour_stop").css({"display":"none"});
  $(".tour_play").css({"display":"block"});
  $(".tour_img > img").hover(
  function(){
    clearInterval(tour);
  },
  function(){
    clearInterval(tour);
  }
);
});

$(".tour_play").click(function(){
  tour = setInterval("tour_op()", 5000);
  $(".tour_play").css({"display":"none"});
  $(".tour_stop").css({"display":"block"});
  $(".tour_img > img").hover(
  function(){
    clearInterval(tour);
  },
  function(){
    tour = setInterval("tour_op()", 5000);
  }
);
});
