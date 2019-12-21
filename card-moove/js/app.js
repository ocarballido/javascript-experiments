$(document).ready(function(){
    //Variables
    var windows = $(window)
		windowsHeight = windows.height()
        windowsWidth = windows.width()
        maxShadows = [10, 20, 30, 80];
        
    $( document ).on( "mousemove", function( event ) {
        var mouseOnX = event.pageX;
        var mouseOnY = event.pageY;
        $('.card').each(function() {
            var cardWidth = $(this).outerWidth();
            var cardHeight = $(this).outerHeight();
            var offset = $(this).offset();
            var cardCenterX = offset.left + (cardWidth / 2);
            var cardCenterY = offset.top + (cardHeight / 2);
            var maxAngle = 60;
            var distanceX = mouseOnX - cardCenterX;
            var distanceY = mouseOnY - cardCenterY;
            var ratioDistanceX = (maxAngle * distanceX) / windowsWidth;
            var ratioDistanceY = (maxAngle * distanceY) / windowsHeight;
            var shadow1X = ((maxShadows[0] * distanceX) / windowsWidth) * -1;
            var shadow2X = ((maxShadows[1] * distanceX) / windowsWidth) * -1;
            var shadow3X = ((maxShadows[2] * distanceX) / windowsWidth) * -1;
            var shadow4X = ((maxShadows[3] * distanceX) / windowsWidth) * -1;
            var shadow1Y = ((maxShadows[0] * distanceY) / windowsHeight) * -1;
            var shadow2Y = ((maxShadows[1] * distanceY) / windowsHeight) * -1;
            var shadow3Y = ((maxShadows[2] * distanceY) / windowsHeight) * -1;
            var shadow4Y = ((maxShadows[3] * distanceY) / windowsHeight) * -1;

            $(this).css({
                'transform':    'perspective(1500px) rotateY(' + ratioDistanceX + 'deg) rotateX(' + ratioDistanceY * -1 + 'deg)',
                "box-shadow": "" + shadow1X + "px " + shadow1Y + "px 2px rgba(0, 0, 0, 0.077)," + shadow2X + "px " + shadow2Y + "px 6px rgba(0, 0, 0, 0.089)," + shadow3X + "px " + shadow3Y + "px 12px rgba(0, 0, 0, 0.093)," + shadow4X + "px " + shadow4Y + "px 24px rgba(0, 0, 0, 0.094)"
            });
        });
    });
});