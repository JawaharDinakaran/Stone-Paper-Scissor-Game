let win = 0;
let lose1 = 0; 
let tie = 0;
let choice = 0;

let playerMove1 = "";
let array = ["stone","paper","scissors"];

/*player move let player select the move*/
let stone = document.querySelector(".stone");
stone.addEventListener("click",()=>{
    playerMove1 = "stone";
    if (choice === 0){
        choicefalse();
    }else{
        choicetrue();
    }
})
let paper = document.querySelector(".paper");
paper.addEventListener("click",()=>{
    playerMove1 = "paper";
    if (choice === 0){
        choicefalse();
    }else{
        choicetrue();
    }
})
let scissors = document.querySelector(".scissors");
scissors.addEventListener("click",()=>{
    playerMove1 = "scissors";
    if (choice === 0){
        choicefalse();
    }else{
        choicetrue();
    }
})

/*computer generating random*/ 
function computerMove(){
    let Move = array[Math.floor(Math.random()*array.length)];
    return Move;
}


/*to generate the stats*/ 
function winstats(){
    let wins = document.querySelector(".wins");
    wins.textContent = win;
}
function losestats(){
    let loses = document.querySelector(".loses");
    loses.textContent = lose1;
}
function tiestats(){
    let ties = document.querySelector(".ties");
    ties.textContent = tie;
}

/*picking choice*/ 
let three = document.querySelector(".three")
three.addEventListener("click",()=>{
    choice = 3;
    console.log(choice);
})
let five = document.querySelector(".five")
five.addEventListener("click",()=>{
    choice = 5;
    console.log(choice);
})
let seven = document.querySelector(".seven")
seven.addEventListener("click",()=>{
    choice = 7;
    console.log(choice);
})
let restart = document.querySelector(".restart")
restart.addEventListener("click",()=>{
    win = 0;
    lose1 = 0;
    tie = 0;
    choice = 0;
    console.log(choice)
    winstats();
    losestats();
    tiestats();
})

/*to make a choice error*/
function choicefalse(){
    let errors = document.querySelector(".choiceerror");
    if(win > tie && win > lose1){
        errors.textContent = "Wow! you Won.\n choice bestes to restart the game";
    }
    else if(lose1 > tie && lose1 > win){
        errors.textContent = "Unfortunately!you lost.\n choice bestes to restart the game";
    }
    else if(tie > win && tie > lose1 || tie === win === lose1){
        errors.textContent = "That's fine you tied\nchoice bestes to restart the game";
    }
    else if(win === 0 && lose1 === 0 && tie ===0){
        errors.textContent = "choice bestes to start the game";
    }
    win = 0;
    lose1 = 0;
    tie = 0;
    winstats();
    losestats();
    tiestats();
}
function choicetrue(){
    choice -= 1;
    let errors = document.querySelector(".choiceerror");
    errors.textContent = "";
    moveDecider();
}



/*for move deciders*/ 
function moveDecider(){
    let comp = computerMove()
    if (playerMove1 === comp){
        tie += 1;
        tiestats();
    }
    else if (playerMove1 === "stone" && comp === "scissors"){
        win += 1;
        winstats();
    }
    else if (playerMove1 === "stone" && comp === "paper"){
        lose1 += 1;
        losestats();
    }
    else if (playerMove1 === "paper" && comp === "stone"){
        win += 1;
        winstats();
    }
    else if (playerMove1 === "paper" && comp === "scissors"){
        lose1 += 1;
        losestats();
    }
    else if (playerMove1 === "scissors" && comp === "stone"){
        lose1 += 1;
        losestats();
    }
    else if (playerMove1 === "scissors" && comp === "paper"){
        win += 1;
        winstats();
    }
    console.log(choice)
};


let theme = document.querySelector(".theme");
theme.addEventListener("click",()=>{
    if (theme.textContent ==="DarkTheme"){
        theme.textContent = "WhiteTheme";
    }
    else{theme.textContent = "DarkTheme";
    }
    let body = document.querySelector("body");
    body.classList.toggle("dark-theme");

})