$(document).ready(function() {
    var windowWidth = $( window ).width();
    var windowHeight = $( window ).height();
    var ratio = 256 / (windowWidth / 6);
    var red_blue = windowWidth / 6;
    var blue_red = red_blue * 2;
    var blue_green = red_blue * 3;
    var green_blue = red_blue * 4;
    var green_red = red_blue * 5;
    var red_green = windowWidth;
    var color;

    $("body").on("mousemove", function() {
        if(event.pageX >= 0 && event.pageX < red_blue) {
            color = 'rgb(' + 255 + ',' + 0 + ',' + Math.floor(event.pageX * ratio) + ')';
            $(this).css("background-color", color);
            $(this).find(".rgb").text(color);
        }else if(event.pageX >= red_blue && event.pageX < blue_red) {
            color = 'rgb(' + Math.floor(256 - (event.pageX * ratio - 256)) + ',' + 0 + ',' + 255 + ')';
            $(this).css("background-color", color);
            $(this).find(".rgb").text(color);
        }else if(event.pageX >= blue_red && event.pageX < blue_green) {
            color = 'rgb(' + 0 + ',' + Math.floor(event.pageX * ratio - 256 * 2) + ',' + 255 + ')';
            $(this).css("background-color", color);
            $(this).find(".rgb").text(color);
        }else if(event.pageX >= blue_green && event.pageX < green_blue) {
            color = 'rgb(' + 0 + ',' + 255 + ',' + Math.floor(256 - (event.pageX * ratio - 256 * 3)) + ')';
            $(this).css("background-color", color);
            $(this).find(".rgb").text(color);
        }else if(event.pageX >= green_blue && event.pageX < green_red) {
            color = 'rgb(' + Math.floor(event.pageX * ratio - 256 * 4) + ',' + 255 + ',' + 0 + ')';
            $(this).css("background-color", color);
            $(this).find(".rgb").text(color);

        }else if(event.pageX >= blue_red && event.pageX < red_green) {
            color = 'rgb(' + 255 + ',' + Math.floor(256 - (event.pageX * ratio - 256 * 5)) + ',' + 0 + ')';
            $(this).css("background-color", color);
            $(this).find(".rgb").text(color);
        }
    });
});