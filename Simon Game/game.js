
var buttonColours=["red","blue","green","yellow"];

var gamePattern=[];

var userClickedPattern=[];

var level=0;

var started =false;

$(document).keypress(function() {
  if (!started) {

    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function nextSequence(){
  userClickedPattern=[];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  var query="#"+randomChosenColour;
  $(query).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

$(".btn").click(handler);

function handler(){
  var userChosenColour= $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
}

function playSound(name){
  var sound="sounds/"+name+".mp3";
  var audio= new Audio(sound);
  audio.play();
}

function animatePress(currentColour){
  $("."+currentColour).addClass("pressed");
  setTimeout(function(){
    $("."+currentColour).removeClass("pressed");

  },100)
}

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel])
  {
    console.log("correct");
    if(gamePattern.length===userClickedPattern.length){
      setTimeout(function(){
        nextSequence();

      },1000)
    }
}
  else{
  console.log("wrong");
  playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  },200)
$("#level-title").text("Game Over, Press Any Key to Restart");
startOver();
}

}

function startOver(){
  level=0;
  started=false;
  gamePattern=[];
}
