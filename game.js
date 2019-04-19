const buttonColours = ['red', 'blue', 'green', 'yellow']
let gamePattern = []
let userClickedPattern = []
let level = 0
let started = false

$(document).keypress(function() {
  if (!started) {
    $('#level-title').text('Level ' + level);
    nextSequence();
    started = true;
  }
})

$('.btn').click(function(){
  const userChosenColour = $(this).attr('id')
  userClickedPattern.push(userChosenColour)

  playSound(userChosenColour)
  animatePress(userChosenColour)

  checkAnswer(userClickedPattern.length-1)
})

checkAnswer = (currentLevel) => {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log('success');

    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
      $('body').addClass('game-over');
      setTimeout(function(){
        $('body').removeClass('game-over');
      }, 200);
      playSound('wrong')
      $('h1').text('Game Over, Press Any Key To Restart');

      startOver()
  }
}

nextSequence = () => {
  userClickedPattern = []
  level++;
  $('#level-title').text('Level ' + level)
  const randomNumber = Math.floor(Math.random()*4)
  const randomChosenColour = buttonColours[randomNumber]
  gamePattern.push(randomChosenColour)

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour)
}

startOver = () => {
  gamePattern = []
  started = false;
  level = 0
}

playSound = (name) => {
  const colorAudio = new Audio('sounds/' + name + '.mp3');
  colorAudio.play();
}

animatePress = (currentColour) => {
  $('#' + currentColour).addClass('pressed');

  setTimeout(function(){
    $('#' + currentColour).removeClass('pressed');
  }, 100)
}



console.log(userClickedPattern);
console.log(gamePattern);
