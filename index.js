$(".buttons").on("click",function(){
    var buttonId = this.id;
    buttonPressed(buttonId);
    checkButtonData(buttonId);
})

function buttonPressed(buttonId){
    $("#"+buttonId).addClass("pressed");
    setTimeout(function(){$("#"+buttonId).removeClass("pressed");},200);
}

function checkButtonData(buttonId) {
    if(buttonId==="AC"){
        $(".input").val("");
    }
    else if(buttonId==="C"){
        var inputData = $(".input").val();
        $(".input").val(inputData.substr(0,inputData.length-1));
    }
    else if(buttonId==="equal"){
        var expression = $(".input").val();
        try{
            $(".input").val((eval(expression)).toPrecision(8));
        }
        catch(err){
            console.log(err);
            $(".input").val("Error");
        }
    }
    else{
        var expression = ($(".input").val()) + ($("#"+buttonId).text());    
        $(".input").val(expression);
    }
}
