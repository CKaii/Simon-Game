const buttonColours = ['red', 'blue', 'green', 'yellow']
const gamePattern = []
const userClickedPattern = []
const level = 0
const started = false

$(document).keypress(function() {
  if (!started) {
    $('#level-title').text('Level' + level);
    nextSequence();
    started = true;
  }
})

$('.btn').click(function(){
  const userChosenColour = $(this).attr('id')
  userClickedPattern.push(userChosenColour)

  playSound(userChosenColour)
  animatePress(userChosenColour)
})

function nextSequence() {
  level++;
  $('#level-title').text('Level' + level)
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
