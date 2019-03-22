buttonColours = ['red', 'blue', 'green', 'yellow']
gamePattern = []

function nextSequence() {
  const randomNumber = Math.floor(Math.random()*4)
  const randomChosenColour = buttonColours[randomNumber]
  gamePattern.push(randomChosenColour)
}

nextSequence();
console.log(gamePattern);
