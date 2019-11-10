jQuery("document").ready(function($){
    $("#target").blur(function(){
        if (parseInt($('#target').val()) >= 1 && parseInt($('#target').val()) <= 100){
            $("#target").css("background-color", "green");
        } else {
            $("#target").css("background-color", "red");
        }
    });

    var nabor = "0123456789qwertyuiopasdfghjklzxcvbnm";
    var len = nabor.length;
    $("#shmiak").on("click", function(){
        var rez = "";
        for (var i = 0; i < 8; i++){
            rez += nabor[Math.floor(Math.random()*(len))];  //nabor[getRandomInt(len)]
        }
        $('#dich').val(rez);
    });

    window.setInterval(function(){
        if ($("#text").css("color") == "rgb(255, 0, 0)"){
            $("#text").css("color", "green");
        } else{
            $("#text").css("color", "red");
        }
      }, 1000);
});