var name=$("#a-name").val();
var ajaxForm=$("form");
var submitA=$("#form-sub");
(function($){
    $.fn.serializeJson=function(){
        var serializeObj={};
        var array=this.serializeArray();
        var str=this.serialize();
        $(array).each(function(){
            if(serializeObj[this.name]){
                if($.isArray(serializeObj[this.name])){
                    serializeObj[this.name].push(this.value);
                }else{
                    serializeObj[this.name]=[serializeObj[this.name],this.value];
                }
            }else{
                serializeObj[this.name]=this.value;
            }
        });
        return serializeObj;
    };
})(jQuery);
submitA.click(function () {
    if ($("#a-phone").val()==""){
        alert("请留下您的邮箱哦");
        return;
    }
    if ($("#a-email").val()==""){
        alert("请留下您的手机号码哦");
        return;
    }
    if ($("#a-name").val()==""){
        alert("请留下您的大名哦");
        return;
    }
    if ($("#thought-idea").val()==""){
        alert("请留下您的想法哦");
        return;
    }
    var data=JSON.stringify(ajaxForm.serializeJson());
    $.ajax({
        type: 'POST',
        contentType: "application/json",
        url: 'http://j1st.io:8089/email/send',
        data:data,
        dataType:'json',
        success: function(data) {
            console.log(data.status);
            alert("发送成功")
        },
        error:function (data) {
            console.log(data.status);
            alert("网络出问题了，请稍后发送")
        }

    });

});
