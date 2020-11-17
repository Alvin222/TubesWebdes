$(document).ready(function(){
    $(".about").hide();

    $("#about").click(function(){
        $(".description").slideUp(function(){
            $(".about").slideDown();
        });
    });

    $("#description").click(function(){
        $(".about").slideUp(function(){
            $(".description").slideDown();
        });
    });

    $("#link-box").click(function(){
        $(".original-link").css("user-select", "all");
    });
});