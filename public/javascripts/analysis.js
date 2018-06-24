$(function() {
    var $scores = $(".score");
    setTimeout(function() {
        for (var i = 0; i < $scores.length; i++) {
            var $element = $($scores[i])

            $element.find(".fill").animate({
                left: (-($element.data("score") * 100))
            }, (Math.floor(Math.random() * 1000) + 700));
        }
    }, 1000)
});