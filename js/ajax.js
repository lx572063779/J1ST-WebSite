var name=$("#a-name").val();
var ajaxForm=$("form");
var submitA=$("#form-sub");
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
    $.ajax({
        type: 'GET',
        url: 'http://j1st.io:8089/email/send?'+ajaxForm.serialize(),
        dataType: 'jsonp',
        success: function(data) {
            
        }
    });
    setTimeout(alert("发送成功，静候佳音"),(2000));
});
