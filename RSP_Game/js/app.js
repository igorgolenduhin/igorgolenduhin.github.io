let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementsByClassName("scoreBoard");
const result_p = document.getElementById("resultPara");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const newGame_button = document.getElementById("newG");

function getCompChoice() {
    const choices = ['r', 's', 'p'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter==='r') return "Rock";
    if(letter==='s') return "Scissors";
    if(letter==='p') return "Paper";
}

function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    const smallUser = "(user)".fontsize(4).sup();
    const smallComp = "(comp)".fontsize(4).sup();
    result_p.innerHTML = `${convertToWord(user)}${smallUser} beats ${convertToWord(computer)}${smallComp}. You WIN! 🔥`;
    document.getElementById(user).classList.add('green-border');
    setTimeout(() => document.getElementById(user).classList.remove('green-border'), 1000);
}

function lose(user, computer){
    compScore++;
    computerScore_span.innerHTML = compScore;
    const smallUser = "(user)".fontsize(4).sup();
    const smallComp = "(comp)".fontsize(4).sup();
    result_p.innerHTML = `${convertToWord(user)}${smallUser} loses to ${convertToWord(computer)}${smallComp}. You LOST! 💩`;
    document.getElementById(user).classList.add('red-border');
    setTimeout(() => document.getElementById(user).classList.remove('red-border'), 1000);
}

function draw(user, computer){
    const smallUser = "(user)".fontsize(4).sup();
    const smallComp = "(comp)".fontsize(4).sup();
    result_p.innerHTML = `${convertToWord(user)}${smallUser} equals ${convertToWord(computer)}${smallComp}. DRAW! 🤷‍♂️`;
    document.getElementById(user).classList.add('gray-border');
    setTimeout(() => document.getElementById(user).classList.remove('gray-border'), 1000);
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "pp":
        case "ss":
        case "rr":
            draw(userChoice, compChoice);
            break;

    }
}
function newGame(){
    userScore = 0;
    userScore_span.innerHTML = userScore;
    compScore = 0;
    computerScore_span.innerHTML = compScore;
    document.getElementById("newG").classList.add("blue-border");
    setTimeout(() => document.getElementById("newG").classList.remove("blue-border"), 1000);
    document.getElementById("resultPara").innerHTML = "Let's play";
}

function main() {

    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
    newGame_button.addEventListener('click', () => newGame());
}

main();