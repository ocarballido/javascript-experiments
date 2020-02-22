$(document).ready(function(){
    var smartList = $('.smart-list');
    var indicator = $('.indicator');
    var indicatorHeight = indicator.outerHeight();
    
    $(smartList).on( "scroll", function() {
        var smartListTop = $(this).offset().top;
        var smartListSection = $(this).find('.smart-list-section');
        smartListSection.each(function() {
            var smartListSectionHeight = $(this).outerHeight();
            var smartListSectionTopPos = $(this).offset().top;
            var distanceDiff = smartListSectionTopPos - smartListTop;

            //console.log(indicatorHeight);

            if(smartListSectionTopPos >= smartListTop) {
                $(this).find(indicator).css({
                    'bottom': 'inherit',
                    'position': 'relative',
                    'top': 'inherit'
                });
            }else {
                if(distanceDiff < 0 && distanceDiff > -smartListSectionHeight + indicatorHeight) {
                    $(this).find(indicator).css({
                        'bottom': 'inherit',
                        'position': 'absolute',
                        'top': Math.abs(distanceDiff) + 'px'
                    });
                }else {
                    $(this).find(indicator).css({
                        'bottom': '0',
                        'position': 'absolute',
                        'top': 'inherit'
                    });
                }
            }
        });
    });
});