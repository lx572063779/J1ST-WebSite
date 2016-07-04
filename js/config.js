var winHeight=window.screen.height;
var winWidth=window.screen.width;
var imgContainer=$(".adver-img-container");
var header=$("header");
var advertext=$("#adver-text");
var adverlogin=$("#adver-text-log-in");
var thimg=$("#th-img");
var registerdiv=$("#register-div");
var tohref=$(".toHref");
var toadver=$(".toAdvertise");
var toconsole=$("#to-console");
window.onload=function () {
    if(winWidth<768){
        imgContainer.css("height",winHeight*706/777);
        header.css("line-height",(winHeight*71/777)+"px");
        header.css("height",winHeight*71/777);
        advertext.css("height",winHeight*6/7);
        adverlogin.css("height",winHeight/7);
        thimg.css("height",winHeight*6/8);
        registerdiv.css("height",winHeight/4);
        $("#bottom-adver-img").css("height",winHeight*706/777)
    }
};
$(document).ready(function () {
    tohref[0].onclick=function () {
        window.location.href="../views/feature.html";
    };
    tohref[1].onclick=function () {
        window.location.href="../views/feature.html";
    };
    tohref[2].onclick=function () {
        window.location.href="../views/feature.html";
    };
    toadver[0].onclick=function () {
        window.location.href="../views/advertise.html";
    };
    toadver[1].onclick=function () {
        window.location.href="../views/advertise.html";
    };
    toadver[2].onclick=function () {
        window.location.href="../views/advertise.html";
    };
    toconsole.click(
        function () {
            window.open("http://developer.j1st.io");
        }
    )
});



