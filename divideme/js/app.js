$(document).ready(function() {
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    var docHeight = $( document ).height();
    var docWidth = $( document ).width();
    $("body").append("<div class='absoluteContainer'><p class='divideme'>DIVIDEME</p></div>");
    $(".absoluteContainer").css("background-color", hue);
    $("body").on("mouseup", ".absoluteContainer", function() {
        var thisW = $(this).width();
        var thisH = $(this).height();
        var thisPos = $(this).offset();
        var thisPosLeft = thisPos.left;
        var thisPosTop = thisPos.top;
        if(thisW > thisH && thisW > 10) {
            if(thisW / 2 < 100) {
                $(this).find(".divideme").remove();
            }
            hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            $(this).animate({
                "width"				:(thisW * 50) / 100 + "px"
            }), 1500;
            $(this).after("<div class='absoluteContainer'><p class='divideme'>DIVIDEME</p></div>").next().css({
                "background-color"	:hue,
                "height"			:thisH + "px",
                "left"				:thisPosLeft + thisW + "px",
                "width"				:"0",
                "top"				:thisPosTop + "px"
            }).animate({
                "height"			:thisH + "px",
                "left"				:thisPosLeft + (thisW * 50) / 100 + "px",
                "width"				:(thisW * 50) / 100 + "px",
                "top"				:thisPosTop + "px"
            });
        }else if(thisH > thisW && thisH > 20) {
            hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            $(this).animate({
                "height"			:(thisH * 50) / 100 + "px",
                "left"				:thisPosLeft + "px",
                "width"				:thisW + "px",
                "top"				:thisPosTop + "px"
            }), 1500;
            $(this).after("<div class='absoluteContainer'><p class='divideme'>DIVIDEME</p></div>").next().css({
                "background-color"	:hue,
                "height"			:"0",
                "left"				:thisPosLeft + "px",
                "width"				:thisW + "px",
                "top"				:thisPosTop + thisH + "px"
            }).animate({
                "height"			:(thisH * 50) / 100 + "px",
                "left"				:thisPosLeft + "px",
                "width"				:thisW + "px",
                "top"				:thisPosTop + (thisH * 50) / 100 + "px"
            });
        }
    });
    $("body").on("mouseover", ".absoluteContainer", function() {
        var divWidth = $(this).width();
        if(divWidth < 100) {
            $(this).find(".divideme").remove();
        }
    });
});