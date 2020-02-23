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
            var colListType = $(this).find('.smart-list-container').hasClass('col-list');

            //console.log(colListType);

            if(smartListSectionTopPos >= smartListTop) {
                if(colListType) {
                    $(this).find(indicator).css({
                        'bottom': 'inherit',
                        'position': 'relative',
                        'top': 'inherit'
                    });
                }else {
                    $(this).find('.row-list .smart-list-indicator').css({
                        'box-shadow': 'none',
                        'bottom': 'inherit',
                        'position': 'relative',
                        'top': 'inherit'
                    });
                    $(this).find('.smart-list-content').css({
                        'padding-top': '0'
                    });
                }
            }else {
                if(distanceDiff < 0 && distanceDiff > -smartListSectionHeight + indicatorHeight) {
                    if(colListType) {
                        $(this).find(indicator).css({
                            'bottom': 'inherit',
                            'position': 'absolute',
                            'top': Math.abs(distanceDiff) + 'px'
                        });
                    }else {
                        $(this).find('.row-list .smart-list-indicator').css({
                            'box-shadow': '0 2px 2px rgba(0, 0, 0, .1)',
                            'bottom': 'inherit',
                            'position': 'absolute',
                            'top': Math.abs(distanceDiff) + 'px'
                        });
                        $(this).find('.smart-list-content').css({
                            'padding-top': indicatorHeight + 'px'
                        });
                    }
                }else {
                    if(colListType) {
                        $(this).find(indicator).css({
                            'bottom': '0',
                            'position': 'absolute',
                            'top': 'inherit'
                        });
                    }else {
                        $(this).find('.row-list .smart-list-indicator').css({
                            'bottom': '0',
                            'position': 'absolute',
                            'top': 'inherit'
                        });
                        $(this).find('.smart-list-content').css({
                            'padding-top': indicatorHeight + 'px'
                        });
                    }
                }
            }
        });
    });
});