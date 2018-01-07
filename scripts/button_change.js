$(window).scroll(function() {
  if ($(this).scrollTop() > 380) {
    $(".menu").removeClass("white").addClass("black");
  } else {
    $(".menu").removeClass("black").addClass("white");
  }
});