$(".pupilImage").click(
    function(){
        //alert("I wish it was Friday");
        var pupilClicked = $(this).css("background-image");
        console.log(pupilClicked);
        $(".pupil").css("background-image",pupilClicked);
    }

);
$(".mouthImage").click(
    function(){
        //alert("Ugh");
         var mouthClicked = $(this).css("background-image");
        console.log(mouthClicked);
        $("#mouth").css("background-image",mouthClicked);
    }

);
$(".color").click(
    function(){
        //alert("Ugh");
         var colorClicked = $(this).css("background-image");
        console.log(colorClicked);
        $(".color").css("background-image",colorClicked);
    }

);