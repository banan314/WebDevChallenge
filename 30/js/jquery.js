/**
 * Created by Kamil on 05-Mar-17.
 */

const fadeThreshold = 0.25;
$(document).ready(function () {
    /*TODO: when cursor hovers over link, the image is blinking and never stops*/
    $(".rects img").mouseenter(function () {
        $(this).fadeTo('def', fadeThreshold);
        $(this).siblings().show();
    })
    .mouseleave(function () {
        $(this).fadeTo('def', 1.0);
        $(this).siblings().hide();
    });
});