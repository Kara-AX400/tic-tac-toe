let user1Score = 0;
let user2Score = 0;
let tieScore = 0;

//logic behind tic tac toe
function play(choice){
    let choices = ["rock","paper","scissors"];

    let input = choices[Math.floor(Math.random()*3)];

    let result = ""

    if(choice === input1){
        result = "tie"
        tieScore++;
    }
    else if(
        (choice === "X" && input === "X")||
        (choice === "O" && input === "O")
    ) {
        result = "Player1 Wins";
        user1Score++;
    }
    else{
        result = "Player2 Wins";
        user2Score++;
    }
    

    //added who won
    document.getElementById("result").innerHTML = `You: ${choice} <br> Computer: ${randomComputer} <br> Result: ${result}`;

    //Added score 
    document.getElementById("score").innerHTML = `Your score: ${userScore} | Computer score: ${computerScore} | Ties: ${tieScore}`
}

winning = [[1,2,3] [4,5,6] [7,8,9] [1,4,7][2,5,8] [3,6,9] [1,5,9] [3,5,7]];
clickTrackerX = [];
clickTrackO = [];





