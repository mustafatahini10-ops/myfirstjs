/* let play=true
while(play){
let playerchoice;
let computerChoice=Math.floor(Math.random()*3)+1;
playerchoice=prompt("Enter rock ,paper, or scissors")
if(playerchoice==="rock"){
    if(computerChoice===1)
        alert("tie");
    else if(computerChoice===2)
        alert("ComputerWins")
    else
        alert("PlayerWins")
    play=confirm("playAgain?")
}

if(playerchoice==="paper"){
    if(computerChoice===1)
        alert("PlayerWins");
    else if(computerChoice===2)
        alert("tie")
    else
        alert("ComputerWIns")
    play=confirm("playAgain?")
}

if(playerchoice==="scissors"){
    if(computerChoice===1)
        alert("ComputerWIns");
    else if(computerChoice===2)
        alert("PlayerWIns")
    else
        alert("tie")
    play=confirm("playAgain?")
}
}
 */
console.log("JS IS WORKING");
const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let current = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {

        if (button.classList.contains("clear")) {
            current = "";
            screen.textContent = "";
        }

        else if (button.classList.contains("equal")) {
            try {
                current = eval(current).toString();
                screen.textContent = current;
            } catch {
                current = "";
                screen.textContent = "Error";
            }
        }
        else if(button.classList.contains("del"))
         {
             current = current.slice(0, -1);
             screen.textContent = current;
            }

        else {
            current += button.textContent;
            screen.textContent = current;
        }

    });
});