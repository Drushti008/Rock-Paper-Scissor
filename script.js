let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#you");
const compScorePara = document.querySelector("#comp");


const showWinner = (userWin,userChoice,compChoice) =>
{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!!!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("Computer win!!");
        msg.innerText =`Computer Win! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const drawGame = () =>
{
   console.log("Game was draw..");
   msg.innerText = "Game was draw!!!";
   msg.style.backgroundColor = "#081b31";
}

const genCompChoice = () =>
{
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];

};

const playGame = (userChoice) =>
{
   console.log("User choice = ",userChoice);
   //Generate Computer choice
   const compChoice = genCompChoice(); 
   console.log("Computer Choice = ",compChoice);

   if(userChoice===compChoice)
   {
      drawGame();
   }
   else
   {
      let userWin = true;
      if(userChoice === "rock")
      {
        //paper, scissors
        userWin = compChoice === "paper" ? false : true;
      }
      else if(userChoice === "paper" )
        {
            //rock, scissors
            userWin = compChoice === "rock" ? true : false;
        }

        else{
            //paper, rock
            userWin = compChoice === "paper" ? true : false;
        }

        showWinner(userWin,userChoice,compChoice);
   }

};

choices.forEach((choice) =>
{
    choice.addEventListener("click", () =>
    {
        const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    } 
    );
}
);