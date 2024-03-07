let msg1 = document.getElementById('message1');
let msg2 = document.getElementById('message2');
let msg3 = document.getElementById('message3');

let answer = Math.floor(Math.random() * 100) + 1;
let noOfGuesses = 0;
let guessedNums = [];

function play(){
    let userGuess = document.getElementById('guess').value;
    console.log(userGuess);
    console.log(answer);
    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)){
        alert('Please enter a number between 1 and 100');
    }

    else{
        guessedNums.push(userGuess);
        noOfGuesses++;

        if(userGuess < answer ){
            msg1.textContent = "I am sorry your guess is low :(";
            msg1.style.color = 'red';
            msg2.textContent = "No of guesses: " + noOfGuesses;
            msg3.textContent = "Guesses made by you: " + guessedNums;
        }
        else if(userGuess > answer ){
            msg1.textContent = "Your guess is high :(";
            msg1.style.color = 'orange';
            msg2.textContent = "No of guesses: " + noOfGuesses;
            msg3.textContent = "Guesses made by you: " + guessedNums;
        }
        else if(userGuess == answer ){
            msg1.textContent = "Congratulations!!! Your have done it :)";
            msg1.style.color = 'green';
            msg2.textContent = "The number was: " + answer;
            msg3.textContent = "Total no of guesses: " + noOfGuesses;
            document.getElementById('my-btn').disabled = true;
        }

    }
}