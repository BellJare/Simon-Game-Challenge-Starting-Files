
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var level = 0;
var started = false;
var body = $("body");


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);

    $("#" + randomChosenColour).delay(100).fadeOut(100).fadeIn(100);
    playsound(randomChosenColour);

    $("h1").html("Level " + (++level));

    userClickedPattern = [];

}



$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playsound(userChosenColour);
    animatePress(userChosenColour);

    
    checkAnswer();

    
});


function checkAnswer() {
    for (var i = 0; i < userClickedPattern.length; i++) {
        if (userClickedPattern[i] !== gamePattern[i]) {
            console.log("wrong");
            playsound("wrong");
            $("body").addClass("game-over");
            setTimeout(function(){
                body.removeClass("game-over");
            }, 200);
            $("h1").html("Game Over, Press Any Key to Restart");
            startOver();
            return;
        }
    }

    if (userClickedPattern.length === gamePattern.length) {
        console.log("Success");     
        setTimeout(nextSequence, 1000);
        

}
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}




function playsound(color) {
    var audio = new Audio("sounds/" + color + ".mp3"); 
    audio.play(); 
    }



$(document).on("keypress", function(event) {
    if (!started)  {
        nextSequence();
        started = true; 
    }
});


function animatePress(currentColor) {
 $("#" + currentColor).addClass("pressed");
 setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
 }, 100);
};


// function checkAnswer(currentLevel) {

// }

