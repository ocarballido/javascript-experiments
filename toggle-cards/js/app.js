$(document).ready(function() {
    var items = $(".cuadro");
    var modelNumber = items.length;
    var iconCheck = $(".check");
    var iconLock = $(".lock");
    items.each(function () {
        addEvent($(this));
    });
    function addEvent (item) {
        item.on("click", function () {
            $(this).toggleClass("active");
            $(this).find(iconCheck).toggleClass("hide");
            var actives = items.filter(".active");
            if (actives.length > 2) {
                items
                .not(actives)
                .removeClass("active")
                .addClass("disabled")
                .off("click");
                items.not(actives).find(iconLock).removeClass("hide");
            } else {
                addEvent( items.filter(".disabled").removeClass("disabled") );
                items.find(iconLock).addClass("hide");
            }
        });
    }
});