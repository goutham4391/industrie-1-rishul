var timeline_express_data = {"animation_disabled":""};
$(document).ready(function() {
    window.dispatchEvent(new CustomEvent("timelineLayoutStart")), $("html").addClass("cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions");
    var e = $(".cd-timeline-block");
    e.each(function() {
        timeline_express_data.animation_disabled || $(this).offset().top > $(window).scrollTop() + .75 * $(window).height() && $(this).find(".cd-timeline-img, .cd-timeline-content").addClass("is-hidden")
    }), timeline_express_data.animation_disabled || $(window).on("scroll", function() {
        e.each(function() {
            $(this).offset().top <= $(window).scrollTop() + .75 * $(window).height() && $(this).find(".cd-timeline-img").hasClass("is-hidden") && $(this).find(".cd-timeline-img, .cd-timeline-content").removeClass("is-hidden").addClass("bounce-in")
        })
    }), window.dispatchEvent(new CustomEvent("timelineLayoutComplete"))
});