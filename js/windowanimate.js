var rocket=$("#rocket");
var leftWin=$("#left-window");
var leftWinH=parseInt($("#left-window"));
var rightWinH=parseInt($("#right-window"));
var rightWin=$("#right-window");
var rocketH=parseInt($("#rocket").css("top"));
var winWidth=window.screen.width;
var speed=0;
var speed2=0;
$(document).ready(function () {
    $(window).scroll(function () {

        if (speed>500){


        }else {
            speed+=8;
            scrollRock()
        }
        if(winWidth>1450){
            if(parseInt($(document).scrollTop())>1380){
                if (parseInt($(document).scrollTop())<1400) {
                    leftWin.animate({left: '100px'});
                    rightWin.animate({right: '100px'});
                    console.log(1)
                }
                if(parseInt($(document).scrollTop())>1400){
                    leftWin.animate({left: '281px'});
                    rightWin.animate({right: '290px'});
                }
            }
        }

    });
    function scrollRock() {
        rocket.css("top",rocketH+speed+"px");
    }
});
