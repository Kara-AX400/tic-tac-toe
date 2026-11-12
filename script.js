

// //logic behind tic tac toe
// function play(choice){
//     let choices = ["rock","paper","scissors"];

//     let input = choices[Math.floor(Math.random()*3)];

//     let result = ""

//     if(choice === input1){
//         result = "tie"
//         tieScore++;
//     }
//     else if(
//         (choice === "X" && input === "X")||
//         (choice === "O" && input === "O")
//     ) {
//         result = "Player1 Wins";
//         user1Score++;
//     }
//     else{
//         result = "Player2 Wins";
//         user2Score++;
//     }
    

//     //added who won
//     document.getElementById("result").innerHTML = `You: ${choice} <br> Computer: ${randomComputer} <br> Result: ${result}`;

//     //Added score 
//     document.getElementById("score").innerHTML = `Your score: ${userScore} | Computer score: ${computerScore} | Ties: ${tieScore}`
// }

// 
// let currentPlayer = "X"

// const turn document.getElementById("turn");
// const cells = document.querySelectorAll(".play");

// cells.forEach((cell)) => {
//     cell.addEventListener("click", () =>{
//         if (cell.dataset.owner) return;

//        
//         cell.textContent = currentPlayer;
//         cell.dataset.owner = currentPlayer;

//         const winner = 
// }



let scoreO = 0;
let scoreX = 0;
let tieScore = 0;


const winning = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
const clickTrackerX = [];
const clickTrackerO = []; 


const buttons = document.querySelectorAll(".play");

let gameOver = false;
let currentPlayer = "X";
const turn = document.getElementById("turn");
const scoreXDisplay = document.getElementById("scoreX");
const scoreODisplay = document.getElementById("scoreO");
const scoreDisplay = document.getElementById("score");

buttons.forEach(play => {
    play.addEventListener("click", () => {
        if (gameOver || play.textContent !== "") {
            return;
        }

        const value = Number(play.dataset.value);
        play.textContent = currentPlayer;
        const tracker = currentPlayer === "X" ? clickTrackerX : clickTrackerO;
        tracker.push(value);

        const winningCombo = winning.find(combo =>
            combo.every(number => tracker.includes(number))
        );

        if (winningCombo) {
            winningCombo.forEach(number => {
                document.querySelector(`.play[data-value="${number}"]`)
                    .classList.add("winner");
            });
            gameOver = true;
            if (currentPlayer === "X") {
                scoreX++;
                scoreXDisplay.textContent = scoreX;
            } else {
                scoreO++;
                scoreODisplay.textContent = scoreO;
            }
            turn.textContent = `Player ${currentPlayer} wins!`;
            scoreDisplay.textContent = `Ties: ${tieScore}`;
            return
        }

        if (clickTrackerX.length + clickTrackerO.length === 9) {
            gameOver = true;
            tieScore++;
            turn.textContent = "It's a draw!";
            scoreDisplay.textContent = `Ties: ${tieScore}`;
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
        turn.textContent = `Player ${currentPlayer}'s turn`;
    });
});

function reset() {
    buttons.forEach(play => {
        play.textContent = "";
        play.classList.remove("winner");
    });

    clickTrackerX.length = 0;
    clickTrackerO.length = 0;
    currentPlayer = "X";
    gameOver = false;
    turn.textContent = "Player X's turn";
    scoreDisplay.textContent = `Ties: ${tieScore}`;
}

scoreXDisplay.textContent = scoreX;
scoreODisplay.textContent = scoreO;
scoreDisplay.textContent = `Ties: ${tieScore}`;
turn.textContent = "Player X's turn";

