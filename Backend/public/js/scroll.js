$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".navbar").addClass("fadeee");
  } else {
    $(".navbar").removeClass("fadeee");
  }
});

