$(window).on('scroll', function() {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      $('.scroll-banner').fadeOut();
    } else {
      $('.scroll-banner').fadeIn();
    }
  });
  