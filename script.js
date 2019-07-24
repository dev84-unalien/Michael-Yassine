let login = $(".login");
let password = $(".password");

function sendData(){
    $.ajax({
        url: "http://192.168.1.112:8001/login",
        type: "POST",
        data: {email: login.val(), 
            password: password.val()}, 
        success:monHandler,
        error:function(){
            alert("erreur");
        }
    });
    function monHandler(result){
            alert(result.message);
    }
}
function facebook(){
    $.ajax({
        url: "http://192.168.1.112:8001/facebook",
        type: "POST",
        data: {email: login.val(), 
            password: password.val()}, 
        success:monHandler,
        error:function(){
            alert("erreur");
        }
    });
    function monHandler(result){
            alert(result.message);
    }
}