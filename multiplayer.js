let win1 = 0;
let lose1= 0; 
let tie1 = 0;

let win2 = 0;
let lose2= 0; 
let tie2 = 0;
let choice = 0;

let playerMove1 = "";
let playerMove2 = "";
let array = ["stone","paper","scissors"];


/*to generate bestes */
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

/* playermove1*/
let stone1 = document.querySelector(".stone1");
stone1.addEventListener("click",()=>{
    playerMove1 = "stone";
    closeeye1();
})
let paper1 = document.querySelector(".paper1");
paper1.addEventListener("click",()=>{
    playerMove1 = "paper";
    closeeye1();
})
let scissors1 = document.querySelector(".scissors1");
scissors1.addEventListener("click",()=>{
    playerMove1 = "scissors";
    closeeye1();
})


/*playermove2*/
let stone2 = document.querySelector(".stone2");
stone2.addEventListener("click",()=>{
    playerMove2 = "stone";
    if (choice === 0){
        choicefalse();
    }
    else{
        closeeye2();
        choicetrue();
    }
})
let paper2 = document.querySelector(".paper2");
paper2.addEventListener("click",()=>{
    playerMove2 = "paper";
    if (choice === 0){
        choicefalse();
    }
    else{
        closeeye2();
        choicetrue();
    }
})
let scissors2 = document.querySelector(".scissors2");
scissors2.addEventListener("click",()=>{
    playerMove2 = "scissors";
    if (choice === 0){
        choicefalse();
    }
    else{
        closeeye2();
        choicetrue();
    }
})


/*to make a choice error*/
function choicefalse(){
    let errors = document.querySelector(".choiceerror");
    if(win1 >win2){
        errors.textContent = "Wow! player1 won.\n choice bestes to restart the game";
    }
    else if(win1 === win2 && tie1 > tie2){
        errors.textContent = "Wow! player1 won.\n choice bestes to restart the game";
    }
    else if(win1 === win2 && tie1 === tie2 && lose1< lose2){
        errors.textContent = "Wow! player1 won.\nchoice bestes to restart the game";
    }
    else if(win1 === 0 && lose1 === 0 && tie1 ===0 && win2 === 0 && lose2 === 0 && tie2 ===0){
        errors.textContent = "choice bestes to start the game";
    }
    else{
        errors.textContent = "Wow! player2 won.\nchoice bestes to restart the game";
    }
    win1 = 0;
    lose1 = 0;
    tie1 = 0;
    win2 = 0;
    lose2 = 0;
    tie2 = 0;
    winstats1();
    losestats1();
    tiestats1();
    winstats2();
    losestats2();
    tiestats2();
}
function choicetrue(){
    choice -= 1;
    let errors = document.querySelector(".choiceerror");
    errors.textContent = "";
    moveDecider();
}



/*to close eye alert */
function closeeye1(){
    let eye1 = document.querySelector(".closeeye1");
    eye1.textContent = "Player1 please close your eye.";
    let eye2 = document.querySelector(".closeeye2");
    eye2.textContent = "";
}
function closeeye2(){
    let eye2 = document.querySelector(".closeeye2");
    eye2.textContent = "Player2 please close your eye.";
    let eye1 = document.querySelector(".closeeye1");
    eye1.textContent = "";
}


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

/*to generate the stats*/ 
function winstats1(){
    let wins1 = document.querySelector(".wins1");
    wins1.textContent = win1;
}
function losestats1(){
    let loses1 = document.querySelector(".loses1");
    loses1.textContent = lose1;
}
function tiestats1(){
    let ties1 = document.querySelector(".ties1");
    ties1.textContent = tie1;
}
function winstats2(){
    let wins2 = document.querySelector(".wins2");
    wins2.textContent = win2;
}
function losestats2(){
    let loses2 = document.querySelector(".loses2");
    loses2.textContent = lose2;
}
function tiestats2(){
    let ties2 = document.querySelector(".ties2");
    ties2.textContent = tie2;
}



/*for move deciders*/ 
function moveDecider(){
    if (playerMove1 === playerMove2){
        tie1 += 1;
        tie2 += 1
        tiestats1();
        tiestats2();
    }
    else if (playerMove1 === "stone" && playerMove2 === "scissors"){
        win1 += 1;
        lose2 += 1
        winstats1();
        losestats2();
    }
    else if (playerMove1 === "stone" && playerMove2 === "paper"){
        lose1 += 1;
        win2 += 1;
        winstats2();
        losestats1();
    }
    else if (playerMove1 === "paper" && playerMove2 === "stone"){
        win1 += 1;
        lose2 += 1
        winstats1();
        losestats2();
    }
    else if (playerMove1 === "paper" && playerMove2 === "scissors"){
        lose1 += 1;
        win2 += 1
        losestats1();
        winstats2();
    }
    else if (playerMove1 === "scissors" && playerMove2 === "stone"){
        lose1 += 1;
        win2 += 1
        losestats1();
        winstats2();
        
    }
    else if (playerMove1 === "scissors" && playerMove2 === "paper"){
        win1 += 1;
        lose2 += 1
        winstats1();
        losestats2();
    }
    console.log(choice)
};