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


