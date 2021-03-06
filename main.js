

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const sci = document.querySelector('.sci');


const results = document.querySelector('.results');
const options = document.querySelectorAll('.options');
const playerScore = document.querySelector('.playerScore');
const compuScore = document.querySelector('.compuScore');
let counter1 = 0;
let counter2 = 0;
const choices_span = document.querySelector(".choices");
const reset = document.querySelector(".resetButton");
let round;
let roundCounter = 1;
let chronology = document.querySelector(".chronology");





function computerPlay() {

    let choices = Math.floor(Math.random() * 3) + 1;
    
    if (choices === 1) {
        return "rock"
    } else if (choices === 2) {
        return  "paper"
    } else if (choices === 3) {
        return "scissors"
    }

}



function game(userChoice) {
    let computer = computerPlay();
    
    if ((userChoice == 'paper' && computer == 'rock') 
    || (userChoice == 'rock' && computer == 'scissors') 
    || (userChoice == 'scissors' && computer == 'paper')) {
        counter1++;
        playerScore.textContent = counter1;
        round = document.createElement("li");
        round.textContent = `#${roundCounter} You win! Computer chose ${computer}`;
        choices_span.appendChild(round);
        roundCounter++;

    } else if ((userChoice == 'rock' && computer == 'paper') 
    || (userChoice == 'scissors' && computer == 'rock') 
    || (userChoice == 'paper' && computer == 'scissors')) {
        counter2++;
        compuScore.textContent = counter2;
        round = document.createElement("li");
        round.textContent = `#${roundCounter} You lose! Computer chose ${computer}`;
        choices_span.appendChild(round);
        roundCounter++;

    } else if (userChoice === computer) {
        round = document.createElement("li");
        round.textContent = `#${roundCounter} Draw! Computer also chose ${computer}`;
        choices_span.appendChild(round);
        roundCounter++;
    }

    if (counter1 === 5) {
        choices_span.textContent = "Congratulations. You won the game!";
        reset.style.display = "initial";

        options.forEach(option => {
            option.style.pointerEvents = "none";
        })


    } else if (counter2 === 5) {
        choices_span.textContent = "Computer won this game. I'm sorry :(";
        reset.style.display = "initial";  

        options.forEach(option => {
            option.style.pointerEvents = "none";
        })
    }
}


function player() {
    rock.addEventListener("click", () => {
        game("rock");
    });

    paper.addEventListener("click", () => {
        game("paper")    
    });

    sci.addEventListener("click", () => {
        game("scissors")
    });
}

reset.addEventListener("click", () => {
    counter1 = 0;
    playerScore.textContent = counter1;
    counter2 = 0;
    compuScore.textContent = counter2;
    roundCounter = 1;

    choices_span.textContent = "";

    reset.style.display = "none";  
    
    options.forEach(option => {
        option.style.pointerEvents = "auto";
    })
});






player()
