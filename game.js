const choices = ["rock", "paper", "scissor"]
const winners = []

function game(){
 for(let i = 0; i < 5 ; i++){
    playround(i)
 }
 document.querySelector('button').textContent='Replay'
 champ()
}



function playround(round){
    const play = player()
    const computer = comp()
    const winner = checker(play, computer)
    winners.push(winner)
    champround(play, computer, winner, round)
}
let player = () => {
    let input = prompt("Lets play RPS")
    while (input == null){
        input =alert("Maybe next time!")
        break;
    }
    input = input.toLowerCase()
    let check = validateInput(input);
    
    while(check == false){
        input = prompt("RPC!")
        while (input == null){
            input =prompt("ITs null!")
        }
        input = input.toLowerCase()
        check = validateInput(input)
    }
    return input
}

let comp = () =>{
        return choices[Math.floor(Math.random()* choices.length)]
}
function validateInput(choice){
   return choices.includes(choice)
}


function checker(play, computer){
    if (play === computer){
        return "Tie";
    }
 
    else if( (play ==='rock' && computer ==='scissor') ||
       
            (play ==='paper' && computer === 'rock') ||
       
            (play==='scissor' && computer ==='paper')
    ){
       return "you win"
    }
       else{
        return"computer wins"
        
    }

}

function champ(){
     let playerwins = winners.filter(item=> item == "you win").length
     let computerwins = winners.filter(ganja => ganja =="computer wins").length
     let ties = winners.filter(item => item == "Tie").length
     console.log('Result:')
     console.log(`player won ${playerwins}\n Computer won ${computerwins} \n Ties ${ties}`)
}

function champround(play, computer , winner, round){
    console.log(`Round: ${round}\n Player chose: ${play}\ncomputer chose: ${computer}\n ${winner} ` )
    console.log(".............................")
}
