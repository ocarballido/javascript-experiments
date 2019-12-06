$(document).ready(function() {
    var diameterBig 		= $(".circle-limit").width()
        nintyPercent		= (diameterBig * 90) / 100
        fivePercent			= (diameterBig * 5) / 100
        diameterSmall 		= $(".circle").width()
        circleBigOffset		= $(".circle-limit").offset()
        circleBigPosX		= circleBigOffset.left
        circleBigPosY		= circleBigOffset.top
        docWidth			= $(document).width()
        docHeight			= $(document).height();
    $(document).on("mousemove", function(event) {
        var mx 			= event.pageX;
        var my 			= event.pageY;
        var distancia 	= Math.sqrt(Math.pow((mx - (circleBigPosX + nintyPercent / 2)), 2) + Math.pow((my - (circleBigPosY + nintyPercent / 2)), 2));
        var distanceDif = distancia - nintyPercent / 2;
        if(mx > circleBigPosX + nintyPercent) {
            var difPosX = Math.abs(((mx - (circleBigPosX + nintyPercent / 2)) * distanceDif) / distancia);
            $(".circle").css("left", mx - circleBigPosX - difPosX + fivePercent + "px");
        }else if(mx < circleBigPosX) {
            var difPosX = Math.abs(((mx - (circleBigPosX + nintyPercent / 2)) * distanceDif) / distancia);
            $(".circle").css("left", mx - circleBigPosX + difPosX + fivePercent + "px");
        }else if(mx > circleBigPosX && mx < circleBigPosX + nintyPercent) {
            if(distancia > nintyPercent / 2 && mx > (circleBigPosX + nintyPercent / 2)) {
                var difPosX = Math.abs(((mx - (circleBigPosX + nintyPercent / 2)) * distanceDif) / distancia);
                $(".circle").css("left", mx - circleBigPosX - difPosX + fivePercent + "px");
            }else if(distancia > nintyPercent / 2 && mx < (circleBigPosX + nintyPercent / 2)) {
                var difPosX = Math.abs(((mx - (circleBigPosX + nintyPercent / 2)) * distanceDif) / distancia);
                $(".circle").css("left", mx -circleBigPosX + difPosX + fivePercent + "px");
            }else {
                $(".circle").css("left", mx - circleBigPosX + fivePercent + "px");
            }
        }
        if(my > circleBigPosY + nintyPercent) {
            var difPosY = Math.abs(((my - (circleBigPosY + nintyPercent / 2)) * distanceDif) / distancia);
            $(".circle").css("top", my - circleBigPosY - difPosY + fivePercent + "px");
        }else if(my < circleBigPosY) {
            var difPosY = Math.abs(((my - (circleBigPosY + nintyPercent / 2)) * distanceDif) / distancia);
            $(".circle").css("top", my - circleBigPosY + difPosY + fivePercent + "px");
        }else if(my > circleBigPosY && my < circleBigPosY + nintyPercent) {
            if(distancia > nintyPercent / 2 && my > (circleBigPosY + nintyPercent / 2)) {
                var difPosY = Math.abs(((my - (circleBigPosY + nintyPercent / 2)) * distanceDif) / distancia);
                $(".circle").css("top", my - circleBigPosY - difPosY + fivePercent + "px");
            }else if(distancia > nintyPercent / 2 && my < (circleBigPosY + nintyPercent / 2)) {
                var difPosY = Math.abs(((my - (circleBigPosY + nintyPercent / 2)) * distanceDif) / distancia);
                $(".circle").css("top", my - circleBigPosY + difPosY + fivePercent + "px");
            }else {
                $(".circle").css("top", my - circleBigPosY + fivePercent + "px");
            }
        }
    });
    $(window).resize(function() {
        var diameterBig 		= $(".circle-limit").width()
            nintyPercent		= (diameterBig * 90) / 100
            fivePercent			= (diameterBig * 5) / 100
            diameterSmall 		= $(".circle").width()
            circleBigOffset		= $(".circle-limit").offset()
            circleBigPosX		= circleBigOffset.left
            circleBigPosY		= circleBigOffset.top
            docWidth			= $(document).width()
            docHeight			= $(document).height();
        $(".circle").css({
            "left": 		"50%",
            "top": 			"50%",
            "transform": 	"translate(-50%, -50%)"
        });
        $(document).on("mousemove", function(event) {
            var mx 			= event.pageX;
            var my 			= event.pageY;
            var distancia 	= Math.sqrt(Math.pow((mx - (circleBigPosX + nintyPercent / 2)), 2) + Math.pow((my - (circleBigPosY + nintyPercent / 2)), 2));
            var distanceDif = distancia - nintyPercent / 2;
            if(mx > circleBigPosX + nintyPercent) {
                var difPosX = Math.abs(((mx - (circleBigPosX + nintyPercent / 2)) * distanceDif) / distancia);
                $(".circle").css("left", mx - circleBigPosX - difPosX + fivePercent + "px");
            }else if(mx < circleBigPosX) {
                var difPosX = Math.abs(((mx - (circleBigPosX + nintyPercent / 2)) * distanceDif) / distancia);
                $(".circle").css("left", mx - circleBigPosX + difPosX + fivePercent + "px");
            }else if(mx > circleBigPosX && mx < circleBigPosX + nintyPercent) {
                if(distancia > nintyPercent / 2 && mx > (circleBigPosX + nintyPercent / 2)) {
                    var difPosX = Math.abs(((mx - (circleBigPosX + nintyPercent / 2)) * distanceDif) / distancia);
                    $(".circle").css("left", mx - circleBigPosX - difPosX + fivePercent + "px");
                }else if(distancia > nintyPercent / 2 && mx < (circleBigPosX + nintyPercent / 2)) {
                    var difPosX = Math.abs(((mx - (circleBigPosX + nintyPercent / 2)) * distanceDif) / distancia);
                    $(".circle").css("left", mx -circleBigPosX + difPosX + fivePercent + "px");
                }else {
                    $(".circle").css("left", mx - circleBigPosX + fivePercent + "px");
                }
            }
            if(my > circleBigPosY + nintyPercent) {
                var difPosY = Math.abs(((my - (circleBigPosY + nintyPercent / 2)) * distanceDif) / distancia);
                $(".circle").css("top", my - circleBigPosY - difPosY + fivePercent + "px");
            }else if(my < circleBigPosY) {
                var difPosY = Math.abs(((my - (circleBigPosY + nintyPercent / 2)) * distanceDif) / distancia);
                $(".circle").css("top", my - circleBigPosY + difPosY + fivePercent + "px");
            }else if(my > circleBigPosY && my < circleBigPosY + nintyPercent) {
                if(distancia > nintyPercent / 2 && my > (circleBigPosY + nintyPercent / 2)) {
                    var difPosY = Math.abs(((my - (circleBigPosY + nintyPercent / 2)) * distanceDif) / distancia);
                    $(".circle").css("top", my - circleBigPosY - difPosY + fivePercent + "px");
                }else if(distancia > nintyPercent / 2 && my < (circleBigPosY + nintyPercent / 2)) {
                    var difPosY = Math.abs(((my - (circleBigPosY + nintyPercent / 2)) * distanceDif) / distancia);
                    $(".circle").css("top", my - circleBigPosY + difPosY + fivePercent + "px");
                }else {
                    $(".circle").css("top", my - circleBigPosY + fivePercent + "px");
                }
            }
        });
    });
});