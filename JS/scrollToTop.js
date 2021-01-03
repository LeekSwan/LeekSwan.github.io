/*Scroll to top when button is clicked*/
$(window).scroll(function() { /* fades button in and out depending on height*/
    var height = $(window).scrollTop();
    if (height > 400) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() { /*controls button click */
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 });
    });

});
