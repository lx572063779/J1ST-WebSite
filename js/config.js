var winHeight=window.screen.height;
var winWidth=window.screen.width;
var imgContainer=$(".adver-img-container");
var header=$("header");
window.onload=function () {
    if(winWidth<768){
        imgContainer.css("height",winHeight*706/777);
        header.css("line-height",(winHeight*71/777)+"px");
        header.css("height",winHeight*71/777);
        $("#bottom-adver-img").css("height",winHeight*706/777)
    }

}


