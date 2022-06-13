$(document).ready(function () {
    $(".menus li a").click(function () {
        let target = $(this).attr("href");

        $("html,body").animate({  //animate is jquery function.
            scrollTop: $("target").offset().top,
        }, 5000);
        e.previousDefault();

    });
})