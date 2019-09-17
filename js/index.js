new WOW().init();

$(".confirm_password").on("keyup", function() {

    const password = $(".password").val();
    const confirmPassword = $(this).val();

    if(password !=  confirmPassword) {

        $(".error").html("Passwords don't match!");
        $("#submit").attr("disabled", "disabled");

    } else {

        $("#submit").removeAttr("disabled");
        $(".error").html("");

    }

});

jQuery(document).ready(function() {

  let btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

});
