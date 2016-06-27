jQuery(document).ready(function() {
  jQuery(".rwd-menu").click(function () {
    jQuery(".top-nav").slideToggle(400, function () {
      jQuery(this).toggleClass("nav-expanded").css('display', '');
    });
  });
});
