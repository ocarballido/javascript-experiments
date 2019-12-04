$(document).ready(function() {
    // Ancho del cuadrado
    var cuadroSide = 10;
    // Margin entre cuadrados
    var margin = 60;
    // Margin mas ancho
    var marginAndSide = cuadroSide + margin;
    // Ancho del window
    var windowWidth = $(window).width();
    // Alto del window
    var windowHeight = $(window).height();
    //Cantidad de cuadros en Width
    var cuadrosOnWidth = Math.floor(windowWidth / marginAndSide);
    //Cantidad de cuadros en Height
    var cuadrosOnHeight = Math.floor(windowHeight / marginAndSide);
    // Color verde
    var greenyellow = "greenyellow";
    // Color rojo
    var crimson = "crimson";
    // Random color
    var hue;
    var container = $(".cuadros-container");
    container.css("overflow", "hidden");
    var cuadro;
    for (var i = 0; i < cuadrosOnHeight; i++) {
        for (var j = 0; j < cuadrosOnWidth; j++) {
            hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            var cuadro = $("<div class='cuadros color-greenyellow'></div>");
            cuadro.css({
                "left" : (j * (cuadroSide + margin)) + "px",
                "top" : (i * (cuadroSide + margin)) + "px"
            });
            container.append(cuadro);
        }
    }
    var cuadros = $(".cuadros");
    var cuadroSide = cuadroSide / 2;
    cuadros.each(function() {
        var offset = $(this).offset();
        $(this).data({x: offset.left + cuadroSide, y: offset.top + cuadroSide});
    });
    $(document).on("mousemove", function(event) {
        var mx = event.pageX;
        var my = event.pageY;
        cuadros.each(function() {
            var cuadrox = $(this).data("x");
            var cuadroy = $(this).data("y");
            var distancia = Math.sqrt(Math.pow((mx - cuadrox), 2) + Math.pow((my - cuadroy), 2));
            var scale = Math.max(12 - distancia / 25, 1);
            var zindex = Math.round(10000 / distancia);
            var hasClassCrimson = $(this).hasClass("color-crimson");
            var hasClassgreenyellow = $(this).hasClass("color-greenyellow");
            $(this).css({
                "transform": 	"scale3d(" + scale + "," + scale + ", 1)",
                "z-index" : zindex,
            });
            if(scale <= 12 && scale > 7) {
                if(hasClassgreenyellow) {
                    $(this).css({
                        "background-color": "crimson"
                    });
                }else {
                    $(this).css({
                        "background-color": "greenyellow"
                    });
                }
            }else {
                if(hasClassCrimson) {
                    $(this).css({
                        "background-color": "crimson"
                    });
                }else {
                    $(this).css({
                        "background-color": "greenyellow"
                    });
                }
            }
        });
    });
    $('.cuadros-container').click(function() {
        $(".cuadros").toggleClass("color-crimson color-greenyellow");
    });
});