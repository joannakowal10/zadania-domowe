'use strict';
$(document).ready(function () {

    function animacja() {
        $("div").animate({
            backgroundColor: "blue"
        }, 5000, function () {
            $(this).html("Animacja skończona")
        })
    }

    $("#przycisk").click(function () {
        $("div").animate({
            width: "100px",
            height: "100px",
            'margin-left': "100px"
        }, 3000, animacja);


    });


});
