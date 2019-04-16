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

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log('success');

    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function() {
        nextSequence();
      }, 1000)
    }
  } else {
      setTimeout(function(){
        $('body').addClass('game-over')
      }, 200)
        $('h1').text('Game Over, Press Any Key To Restart')
    console.log('wrong');
  }
}

function nextSequence() {
  userClickedPattern = []
  level++;
  $('#level-title').text('Level ' + level)
  const randomNumber = Math.floor(Math.random()*4)
  const randomChosenColour = buttonColours[randomNumber]
  gamePattern.push(randomChosenColour)

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour)
}

function playSound(name) {
  const colorAudio = new Audio('sounds/' + name + '.mp3');
  colorAudio.play();
}

function animatePress(currentColour){
  $('#' + currentColour).addClass('pressed');

  setTimeout(function(){
    $('#' + currentColour).removeClass('pressed');
  }, 100)
}



console.log(userClickedPattern);
console.log(gamePattern);
