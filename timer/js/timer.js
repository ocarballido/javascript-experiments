$(document).ready(function() {
	var cancelNewTimer = $(".cancel-new-timer");
	var timerTemplate = $('#timer-template');
	var template = function() {
		return timerTemplate.html();
	};
	cancelNewTimer.click(function() {
		$(".timer-value h3 span").text(digitValue);
		$("input[name='hours'], input[name='minutes'], input[name='seconds']").val("0");
	});
	$('#addNewTimerModal').on('hidden.bs.modal', function (e) {
		$("input[name='hours'], input[name='minutes'], input[name='seconds']").val("0");
	})
	$(".addTimer").click(function() {
		var segment = $(template());
		var hours = $("input[name='hours']").val();
		var minutes = $("input[name='minutes']").val();
		var seconds = $("input[name='seconds']").val();
		var totalTime = (hours * 3600) + (minutes * 60) + (seconds * 1);
		var timerLength = $(".timer").length;
		segment.insertBefore(".add-timer");
		segment.find(".timer-digits").attr("id", "timer-" + timerLength + "");
		segment.find(".timer-digits").countdown({
			until: + totalTime,
			onTick: everyOne,
			tickInterval: 1,
			onExpiry: playSound,
			expiryText: "<div class='over'>TIMER FINISHED</div>"
		});
		function everyOne(periods) {
			var currentSeconds = $.countdown.periodsToSeconds(periods);
			var currentPercent = Math.round((currentSeconds * 100) / totalTime);
			var barPercent = 100 - currentPercent;
			segment.find(".progress-bar").css("width", barPercent + "%");
		}
		function playSound() {
			document.getElementById('audio').play();
		}
		segment.find(".btn-delete").click(function() {
			document.getElementById("audio").pause();
			document.getElementById("audio").currentTime = 0;
			$(this).parents(".timer").animate({opacity: "0", height: "0", margin: "0"}, 500, function() {
				segment.find(".timer-digits").countdown("destroy");
				$(this).remove();
			});
		});
		segment.find(".btn-restart").click(function() {
			document.getElementById("audio").pause();
			document.getElementById("audio").currentTime = 0;
			segment.find(".timer-digits").countdown("option", {until: totalTime});
		});
		segment.find(".btn-pause").click(function() {
			document.getElementById("audio").pause();
			document.getElementById("audio").currentTime = 0;
			var pause = $(this).text() === 'Pause';
			$(this).text(pause ? 'Resume' : 'Pause');
			segment.find(".timer-digits").countdown(pause ? 'pause' : 'resume');
		});
		segment.find(".btn-play").click(function() {
			$(this).toggleClass("hide");
			$(this).siblings(".btn-pause").toggleClass("hide");
		});
	});
});