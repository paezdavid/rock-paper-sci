

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


// Función que elige un número aleatorio del 1 al 3. A cada número se le asigna un 'arma'.
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

// Función principal del juego. Targetea los botones, les añade eventos a estos.
// Cuando un botón es clickeado, se añade una string como argumento a la función game().
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

// La lógica de cada turno se encuentra en la función game().
// el parámetro userChoice es el 'arma' que eligió el usuario al clickear el botón respectivo.
function game(userChoice) {
    let computer = computerPlay(); // Se elige una opción aleatoria y se almacena en la variable 'computer'
    
    // Lógica para determinar lo que sucede cuando el usuario gana, pierde o empata.
    if ((userChoice == 'paper' && computer == 'rock') 
    || (userChoice == 'rock' && computer == 'scissors') 
    || (userChoice == 'scissors' && computer == 'paper')) {
        counter1++;
        playerScore.textContent = counter1;
        round = document.createElement("li");
        round.textContent = `#${roundCounter} You win! Computer played ${computer}`;
        choices_span.appendChild(round);
        roundCounter++;

    } else if ((userChoice == 'rock' && computer == 'paper') 
    || (userChoice == 'scissors' && computer == 'rock') 
    || (userChoice == 'paper' && computer == 'scissors')) {
        counter2++;
        compuScore.textContent = counter2;
        round = document.createElement("li");
        round.textContent = `#${roundCounter} You lose! Computer played ${computer}`;
        choices_span.appendChild(round);
        roundCounter++;

    } else if (userChoice === computer) {
        round = document.createElement("li");
        round.textContent = `#${roundCounter} Draw! Computer also played ${computer}`;
        choices_span.appendChild(round);
        roundCounter++;
    }

    // Cuando el jugador o la computadora llegan a 5 puntos, termina el juego.
    if (counter1 === 5) {
        choices_span.textContent = "Congratulations. You win!";
        reset.style.display = "initial";
        options.forEach(option => {
            option.toggleAttribute('disabled'); // Los botones para elegir un arma son desacttivados temporalmente.
        })

    } else if (counter2 === 5) {
        choices_span.textContent = "Computer wins this round.";
        reset.style.display = "initial";  
        options.forEach(option => {
            option.toggleAttribute('disabled');
        })
    }
}

// Botón para iniciar una nueva partida. 
reset.addEventListener("click", () => {
    counter1 = 0;
    playerScore.textContent = counter1;
    counter2 = 0;
    compuScore.textContent = counter2;
    roundCounter = 1;
    choices_span.textContent = "";
    reset.style.display = "none";  
    options.forEach(option => {
        option.toggleAttribute('disabled');
    })
});

player()
