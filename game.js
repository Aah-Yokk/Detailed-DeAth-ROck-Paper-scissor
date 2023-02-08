const choices = ["rock", "paper", "scissor"]
const winners = []

function game(){
 for(let i = 1; i <=5 ; i++){
    playround(i)
 }
 document.querySelector("#opbtn").textContent='Replay'
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
        input = prompt("ROCK, PAPER OR SCISSOR IDIOT!")
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
     let computerwins = winners.filter(item => item =="computer wins").length
     let ties = winners.filter(item => item == "Tie").length
     console.log('Result:')
     console.log(`player won ${playerwins}\n Computer won ${computerwins} \n Ties ${ties}`)
}

function champround(play, computer , winner, round){
    console.log(`Round: ${round}\n Player chose: ${play}\ncomputer chose: ${computer}\n ${winner} ` )
    console.log(".............................")
}

//DOM MANIPULATION
let newdiv = document.createElement("div")
newdiv.id = "newdiv"
document.body.appendChild(newdiv)
for (let i = 1 ; i <= 3; i++){
        let newbtns = document.createElement("button");
        newbtns.classList.add('suppabutton')
        newbtns.textContent = `button ${i}`
        document.querySelector("#newdiv").appendChild(newbtns)  
}
let sup_btn = document.querySelectorAll(".suppabutton");
for (let i = 0; i < sup_btn.length; i++){
    sup_btn[i].style.padding="30px 30px"
    sup_btn[i].style.margin="30px 30px"

}
document.querySelector('#newdiv').style.display="flex"
document.querySelector('#newdiv').style.justifyContent= "center"
document.querySelector('#newdiv').style.alignContent= "center"
// let jstyle = document.querySelectorAll(".supabutton")
// jstyle.style.padding = "50px 20px"
sup_btn = document.addEventListener("mousedown",function game(){
    for(let i = 1; i <=5 ; i++){
       playround(i)
    }
    
    champ()
   })