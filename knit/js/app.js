jQuery(function($){

	$('#sidebarCollapse').on('click', function () {

		$('#sidebar').toggleClass('active');

		$(this).find("span").toggleClass("hide-element");

	});

	//Tiles size
	var tileSize = 42;
	var actualTileSizeClass;

	$(".btn-group-tiles").on("click", ".btn", function () {	

		tileSize = $(this).attr("data-size");

		$(".square-row .square").attr("data-size", tileSize);

		console.log(tileSize);

	});

	//Adding column
	var rowNumber = 7;
	$(".addColumn").click(function() {

		if(rowNumber <= 100) {

			$(".square-row").append("<a class='square borderer d-flex justify-content-center align-items-center' data-size='"+ tileSize +"'><span class='knit-icon' data-paint='" + colorPaint + "'></span></a>");

			rowNumber++;

		}

	});

	$(".deleteColumn").click(function() {

		if(rowNumber > 7) {

			$(".square-row a:last-child").remove();

			rowNumber--;

		}

	});

	//Adding row
	var columnNumber = 11;
	$(".addRow").click(function() {

		if(columnNumber <= 100) {

			var lastRowContent = $(".square-container ul").children().last().html();

			var lastRowContainer = $("<li class='row square-row m-0'>" + lastRowContent + "</li>");

			lastRowContainer.insertBefore($(".square-container ul").children().last());

			columnNumber++;

		}

	});

	$(".deleteRow").click(function() {

		if(columnNumber > 11) {

			$(".square-container ul").children().last().prev().remove();

			columnNumber--;

		}

	});

	//Toggleing borders
	$(".btn-group-border .btn.show-border").click(function() {

		$(".square-container .square-row .square").addClass("borderer");

	});

	$(".btn-group-border .btn.hide-border").click(function() {

		$(".square-container .square-row .square").removeClass("borderer");

	});

	//Restartin app
	$(".deleteBrushes").click(function() {

		$(".square-container .square-row .square").find("span").removeClass();

		$(".square-container .square-row .square").find("span").addClass("knit-icon");

	});

	$(".restartApp").click(function() {

		location.reload();

	});

	//Getting active brush
	var activeDot = "dot-knit_01";
	$(".btn-group-knit .btn").each(function() {

		$(this).click(function() {

			activeDot = $(this).find("span").attr('class').split(' ')[1];

		});

	});

	// ----- Dropdown value -----
	var sideMenuSelectedValue;
	$(".brush-dropdown .dropdown-menu .dropdown-item").click(function() {

		sideMenuSelectedValue = $(this).text();

		$(this).siblings().removeClass("active");

		$(this).addClass("active");

		$(this).closest(".brush-dropdown").find(".dropdown-toggle").text(sideMenuSelectedValue);

		$(".brushes-container").addClass("hide-element");

		$(".brushes-" + sideMenuSelectedValue.toLowerCase() + "").removeClass("hide-element");

		$(".brushes-container .btn-group-toggle .btn").removeClass("active");

		$(".brushes-" + sideMenuSelectedValue.toLowerCase() + " .btn-group-toggle label:first").addClass("active");

		activeDot = $(".brushes-" + sideMenuSelectedValue.toLowerCase() + " .btn-group-toggle label:first span").attr('class').split(' ')[1];

	});

	//Selecting color
	var colorPaint = "000";

	$(".btn-group-swatches").on("click", ".btn", function () {	

		colorPaint = $(this).attr("data-color");

		//$(this).closest(".btn-group-swatches").next(".paintCanvas .dot-circle").css("color", "#" + colorPaint);

		$(".paintCanvas .bg-color").css("background-color", "#" + colorPaint);

		$(".paintBrushes .bg-color").css("background-color", "#" + colorPaint);

		console.log(colorPaint);

	});

	//Canvas background
	$(".paintCanvas").on("click", function() {

		$("#printContainer").css("background", "#" + colorPaint);

	});

	//All brushes color
	$(".paintBrushes").on("click", function() {

		$(".square-container ul li .square span").attr("data-paint", colorPaint);

		$(".square-container ul li .square span").css("color", "#" + colorPaint);

	});

	//Drawing the brush
	var actualSquareClass;
	var actualColorPaint;
	$(".square-container ul").on("click", ".square", function () {

		actualSquareClass = $(this).find("span").attr('class').split(' ')[1];

		actualColorPaint = $(this).find("span").attr('data-paint');

		if(activeDot == actualSquareClass && actualColorPaint ==colorPaint) {

			$(this).find("span").removeClass(activeDot);

		}else {

			$(this).find("span").removeClass(actualSquareClass);

			$(this).find("span").addClass(activeDot);

			$(this).find("span").css("color", "#" + colorPaint);

			$(this).find("span").attr("data-paint", colorPaint);

		}

	});

	$("#saveArt").on("click", function() {

		$("#printContainer").print();

	});

});

