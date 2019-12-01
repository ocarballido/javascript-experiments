jQuery(function($){

	var windows = $(window)
		windowsHeight = windows.height()
		windowsWidth = windows.width();

	var mousePositionX;
	var mousePositionY;
	var compareBeforeWidth;
	//var handlerPosY;

	$( document ).on( "mousemove", function(event) {
		mousePositionX = event.pageX;
		mousePositionY = event.pageY;

		compareBeforeWidth = (mousePositionX * 100) / windowsWidth;
		//handlerPosY = (mousePositionY * 100) / windowsHeight;

		$(".compare-before").css("width", compareBeforeWidth + "%");

		$(".compare-handler").css("top", mousePositionY - 20 + "px");

		console.log(mousePositionX, windowsWidth, compareBeforeWidth);

	});

	$(window).resize(function () {

		windows = $(window)
		windowsHeight = windows.height()
		windowsWidth = windows.width();

		mousePositionX = event.pageX;
		mousePositionY = event.pageY;

		compareBeforeWidth = (mousePositionX * 100) / windowsWidth;

	});

});

