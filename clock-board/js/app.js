$(document).ready(function(){
    //Variables
    var date;
    var seconds;
    var minutes;
    var hours;
    var tenth;
    var thousandths;

    function clock() {
        date = new Date();
        tenth = date.getMilliseconds();
        seconds = date.getSeconds();
        minutes = date.getMinutes();
        hours = date.getHours();

        //$('.test').text(Math.round(tenth / 100));

        for(var i = 0; i <= 9; i++) {
            // Tenth of a seconds
            if(Math.round(tenth / 100)%10 == i) {
                $('.tenth .number:eq(0) .row-led').removeClass('on');
                $('.tenth .number:eq(0) .row-led.led-' + i + '').addClass('on');
            }

            // Seconds
            if(seconds%10 == i) {
                $('.seconds .number:eq(1) .row-led').removeClass('on');
                $('.seconds .number:eq(1) .row-led.led-' + i + '').addClass('on');
            }
            if(Math.floor(seconds/10) == i) {
                $('.seconds .number:eq(0) .row-led').removeClass('on');
                $('.seconds .number:eq(0) .row-led.led-' + i + '').addClass('on');
            }

            // Minutes
            if(minutes%10 == i) {
                $('.minutes .number:eq(1) .row-led').removeClass('on');
                $('.minutes .number:eq(1) .row-led.led-' + i + '').addClass('on');
            }
            if(Math.floor(minutes/10) == i) {
                $('.minutes .number:eq(0) .row-led').removeClass('on');
                $('.minutes .number:eq(0) .row-led.led-' + i + '').addClass('on');
            }

            // Hours
            if(hours%10 == i) {
                $('.hours .number:eq(1) .row-led').removeClass('on');
                $('.hours .number:eq(1) .row-led.led-' + i + '').addClass('on');
            }
            if(Math.floor(hours/10) == i) {
                $('.hours .number:eq(0) .row-led').removeClass('on');
                $('.hours .number:eq(0) .row-led.led-' + i + '').addClass('on');
            }
        }
    }
    setInterval(clock, 100);

    $('.btn-group-toggle label').each(function() {
        $(this).on('click', function() {
            var optionclick = $(this).find('input').attr('id');
            switch(optionclick) {
                case "hours":
                    var isMinutesOn = $('.minutes').hasClass('d-none');
                    console.log(isMinutesOn);
                    $('.hours').toggleClass('d-none');
                    if(!isMinutesOn) {
                        $('.divider-minutes').toggleClass('d-none d-flex');
                    }
                    break;
                case "minutes":
                    $('.minutes').toggleClass('d-none');
                    $('.divider-minutes').toggleClass('d-none d-flex');
                    break;
                case "seconds":
                    $('.seconds').toggleClass('d-none');
                    $('.divider-seconds').toggleClass('d-none d-flex');
                    break;
                case "tenth":
                    $('.tenth').toggleClass('d-none');
                    $('.divider-tenth').toggleClass('d-none d-flex');
                    break;
            }
            console.log(optionclick);
        });
    });
});