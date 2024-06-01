  // scripts.js
  $(document).ready(function() {
    $('.menu > li').hover(
        function() {
            $(this).find('.submenu').stop(true, true).slideDown(200);
        },
        function() {
            $(this).find('.submenu').stop(true, true).slideUp(200);
        }
    );
});
