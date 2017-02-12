(function(win){
  win.timeScroll = 1000;
  win.eventHide = {};
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      clearTimeout(win.eventHide);
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, win.timeScroll);
          return false;
        }
      }
    });
  });
  $(function() {
    $('#navbar_toggler_menu a[href*="#"]').click(function(){
      win.eventHide = setTimeout(function() {
        $('#navbar_toggler_menu').collapse('hide');
      }, win.timeScroll);
    });
  });
})(window);