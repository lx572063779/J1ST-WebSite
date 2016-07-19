var formData=new FormData();
$(".logo").click(
    function () {
        window.location.href="../index.html";
    }
);
$("#to-console").click(
    function () {
        window.open("http://developer.j1st.io")
    }
);
$("#sign-up").click(
    function () {
        window.open("http://developer.j1st.io")
    }
);
$("#submit-upload").click(
    function () {
        if($("#uploadFile").val()===""){
            alert("请上传您的简历！") ;
            return;
        }
        formData.append('file',$("#uploadFile")[0].files[0]);
        formData.append('career',$("#career").val());
        $.ajax({
            url: 'http://j1st.io:8089/email/join',
            type: 'POST',
            cache: false,
            data: formData,
            processData: false,
            contentType: false
        }).done(function(res) {
            alert("发送成功！")
        }).fail(function(res) {
            alert("发送失败，请稍后再试")
        });
    }
);
$("#uploadFile").on("change",function(){
    var filePath=$(this).val();
    if(filePath.indexOf("jpg")!=-1 || filePath.indexOf("png")!=-1|| filePath.indexOf("doc")!=-1|| filePath.indexOf("pdf")!=-1|| filePath.indexOf("html")!=-1){
        if($("#uploadFile")[0].files[0].size>1024*1024*2){
            $("#showFileName").html("请上传小于2M的文件");
            return
        }
        var arr=filePath.split('\\');
        var fileName=arr[arr.length-1];
        $("#showFileName").html(fileName);
        $("#submit-upload").removeAttr("disabled");
    }else{
        $("#showFileName").html("请上传pdf,doc,html,jpg,png等格式的简历");
        $("#submit-upload")[0].setAttribute("disabled","disabled")
    }
})