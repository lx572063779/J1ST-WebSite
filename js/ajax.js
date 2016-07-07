var name=$("#a-name").val();
var ajaxForm=$("form");
var mobile=$("#a-phone").val();
var eMail=$("#a-email").val();
var company=$("#a-company").val();
var address=$("#a-adress").val();
var rofessional=$("#a-select").val();
var advice=$("#thought-idea").val();
var submitA=$("#form-sub");
submitA.click(function () {
    $.ajax({
        type: 'GET',
        url: 'http://192.168.1.27:8080/email/send?'+ajaxForm.serialize(),
        dataType: 'jsonp',
        success: function(data) {
            
        }
    });
    setTimeout(alert("发送成功，静候佳音"),(2000));
});
