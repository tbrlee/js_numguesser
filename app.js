
//Game default values
let min = 1,
    max =  10,
    winningNum = 2,
    guessesLeft = 3;

//UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  else 
  // Check if won
  if(guess === winningNum){
    /*// Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = 'green';
    // Set message
    setMessage(`${winningNum} is correct, YOU WIN!`, 'green'); */
    gameOver(true, `${winningNum} is correct, YOU WIN!`);

  } else 
  {
      //Subtract by one for each wrong guess
      guessesLeft -= 1;

      if (guessesLeft === 0) 
      {
        //Game Lost
        gameOver(false, `Game over, you lost. The correct number was ${winningNum}`);
      } else 
      {
        //Game continues. Gamer has another chances left

        //Change border color for the  wrong guess
        guessInput.style.borderColor = 'red';
        
        //Clear Input
        guessInput.value = '';

        setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
       }

    } 
});

//Game Over
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  //Set text color
  message.style.color = color;
  // Set message
  setMessage(msg);

}  


// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}
