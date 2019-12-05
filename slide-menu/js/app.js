$(document).ready(function() {
    var docHeight = $( window ).height();
    var numItems = $(".slap").length;
    var slapWidth = $(".slap-menu").width();
    var itemWidthPercent = 100 / numItems;
    var itemWidth = (itemWidthPercent * slapWidth) / 100;

    $(".slap-content").css({
        "height"		: docHeight - 36 + "px"
    });
    for(var i = 0; i < numItems; i ++) {
        $(".slap-menu .slap:eq(" + i + ")").attr("id", "slap-" + i + "").css("z-index", numItems - i);
        $(".slap-menu .slap:eq(" + i + ") .slap-tab").css({
            "margin-left"	:(itemWidthPercent * i) + "%",
            "width"			:itemWidthPercent + "%"
        });
    }

    $("body").on("click", function() {
        if(event.pageY > docHeight - 36 || event.pageY < 36 + 41) {
            if(event.pageX > 0 && event.pageX < itemWidth) {
                //---- Slap 1
                var isActive= $(this).find("#slap-0").hasClass("active");
                if(!isActive) {
                    $(".slap").animate({
                        "top"	: "0px"
                    }).removeClass("inactive-up");
                    $(".slap").not("#slap-0").addClass("inactive-down").removeClass("active");
                    $("#slap-0").addClass("active");
                }
            }else if(event.pageX > itemWidth && event.pageX < itemWidth * 2) {
                //---- Slap 2
                var isActive= $(this).find("#slap-1").hasClass("active");
                var isInactiveUp= $(this).find("#slap-1").hasClass("inactive-up");
                var isInactiveDown= $(this).find("#slap-1").hasClass("inactive-down");
                if(!isActive && isInactiveDown) {
                    $("#slap-0").animate({
                        "top"	: - docHeight + 36 + 41 + "px"
                    }).removeClass("active inactive-down").addClass("inactive-up");
                    $("#slap-1").addClass("active");
                }else if(!isActive && isInactiveUp) {
                    $("#slap-1, #slap-2, #slap-3, #slap-4").animate({
                        "top"	: "0"
                    }).removeClass("active inactive-up");
                    $("#slap-1").addClass("active");
                    $("#slap-2, #slap-3, #slap-4").addClass("inactive-down");
                }
            }else if(event.pageX > itemWidth * 2 && event.pageX < itemWidth * 3) {
                //---- Slap 3
                var isActive= $(this).find("#slap-2").hasClass("active");
                var isInactiveUp= $(this).find("#slap-2").hasClass("inactive-up");
                var isInactiveDown= $(this).find("#slap-2").hasClass("inactive-down");
                if(!isActive && isInactiveDown) {
                    $("#slap-0, #slap-1").animate({
                        "top"	: - docHeight + 36 + 41 + "px"
                    }).removeClass("active inactive-down").addClass("inactive-up");
                    $("#slap-2").addClass("active");
                }else if(!isActive && isInactiveUp) {
                    $("#slap-2, #slap-3, #slap-4").animate({
                        "top"	: "0"
                    }).removeClass("active inactive-up");
                    $("#slap-2").addClass("active");
                    $("#slap-3, #slap-4").addClass("inactive-down");
                }
            }else if(event.pageX > itemWidth * 3 && event.pageX < itemWidth * 4) {
                //---- Slap 4
                var isActive= $(this).find("#slap-3").hasClass("active");
                var isInactiveUp= $(this).find("#slap-3").hasClass("inactive-up");
                var isInactiveDown= $(this).find("#slap-3").hasClass("inactive-down");
                if(!isActive && isInactiveDown) {
                    $("#slap-0, #slap-1, #slap-2").animate({
                        "top"	: - docHeight + 36 + 41 + "px"
                    }).removeClass("active inactive-down").addClass("inactive-up");
                    $("#slap-3").addClass("active");
                }else if(!isActive && isInactiveUp) {
                    $("#slap-3, #slap-4").animate({
                        "top"	: "0"
                    }).removeClass("active inactive-up");
                    $("#slap-3").addClass("active");
                    $("#slap-4").addClass("inactive-down");
                }
            }else if(event.pageX > itemWidth * 4 && event.pageX < itemWidth * 5) {
                //---- Slap 5
                var isActive= $(this).find("#slap-4").hasClass("active");
                var isInactiveUp= $(this).find("#slap-4").hasClass("inactive-up");
                var isInactiveDown= $(this).find("#slap-4").hasClass("inactive-down");
                if(!isActive && isInactiveDown) {
                    $("#slap-0, #slap-1, #slap-2, #slap-3").animate({
                        "top"	: - docHeight + 36 + 41 + "px"
                    }).removeClass("active inactive-down").addClass("inactive-up");
                    $("#slap-4").addClass("active");
                }
            }
        }
    });
});