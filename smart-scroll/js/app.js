$(document).ready(function(){
    var smartList = $('.smart-list');// Select list element
    var indicatorCotainer = $('.smart-list-indicator');
    var smartListContent = $('.smart-list-content');
    var indicator = $('.indicator');//Select indicator
    var indicatorHeight = indicator.outerHeight();//Get indicator height

    $(smartList).each(function() {
        var layoutType = $(this).hasClass('col-list');// Get layout type
        var smartListTop = $(this).offset().top;//Get distance from top
        var smartListSection = $(this).find('.smart-list-section');//Select list section element
        if(layoutType) {
            $(this).on('scroll', function() {
                smartListSection.each(function() {
                    var smartListSectionHeight = $(this).outerHeight();//Get each element height
                    var smartListSectionTopPos = $(this).offset().top;//Get each element top position
                    var distanceDiff = smartListSectionTopPos - smartListTop;//Get difference og distance between both elements

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
                                'top': Math.abs(distanceDiff)
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
        }else {
            $(this).on('scroll', function() {
                smartListSection.each(function() {
                    var smartListSectionHeight = $(this).outerHeight();//Get each element height
                    var smartListSectionTopPos = $(this).offset().top;//Get each element top position
                    var distanceDiff = smartListSectionTopPos - smartListTop;//Get difference og distance between both elements

                    if(smartListSectionTopPos >= smartListTop) {
                        $(this).find(indicatorCotainer).css({
                            'box-shadow': 'none',
                            'bottom': 'inherit',
                            'position': 'relative',
                            'top': 'inherit'
                        });
                        $(this).find(smartListContent).css({
                            'padding-top': '0'
                        });
                    }else {
                        if(distanceDiff < 0 && distanceDiff > -smartListSectionHeight + indicatorHeight) {
                            $(this).find(indicatorCotainer).css({
                                'box-shadow': '0 2px 2px rgba(0, 0, 0, .1)',
                                'bottom': 'inherit',
                                'position': 'absolute',
                                'top': Math.abs(distanceDiff)
                            });
                            $(this).find(smartListContent).css({
                                'padding-top': indicatorHeight
                            });
                        }else {
                            $(this).find(indicatorCotainer).css({
                                'bottom': '0',
                                'position': 'absolute',
                                'top': 'inherit'
                            });
                            $(this).find(smartListContent).css({
                                'padding-top': indicatorHeight
                            });
                        }
                    }
                });
            });
        }
    });
});