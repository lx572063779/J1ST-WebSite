var scroll=0;
var animate=$("#dollar-animate-2");
$(document).ready(function () {
    $(window).scroll(function () {
        if(scroll>360){
            scroll=0;
        }
        scroll+=10;
        scrollball();
    });
    function scrollball() {
        animate.css("transform","rotateZ"+"("+scroll+"deg"+")");
    }

});