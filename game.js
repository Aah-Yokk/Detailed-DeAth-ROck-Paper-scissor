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
    while(input == null){
        input =alert("Maybe next time!")
        break;
    }
    input = input.toLowerCase()
    let check = validateInput(input)
    
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
        
        document.querySelector("#newdiv").appendChild(newbtns)  
}
let sup_btn = document.querySelectorAll(".suppabutton");
function btn_content() {for (let i = 0; i < sup_btn.length; i++){
    sup_btn[i].style.padding="30px 40px"
    sup_btn[i].style.margin="30px 30px"
    sup_btn[i].style.borderColor = "blue"
    sup_btn[i].style.borderWidth = "6px"
    sup_btn[0].textContent = "rock"
    sup_btn[1].textContent = "paper"
    sup_btn[2].textContent = "scissor"
    sup_btn[0].id= "1btn"
    sup_btn[1].id= "2btn"
    sup_btn[2].id= "3btn"
    sup_btn[0].setAttribute('innerHTML', choices[0])
    sup_btn[1].setAttribute('innerHTML', choices[1])
    sup_btn[2].setAttribute('innerHTML', choices[2])
}}
btn_content()
function gameplay(){
    let start = document.getElementsByClassName('.suppabutton')
    document.addEventListener('click', e =>{
        if (e.target.id == "#1btn" ){
            console.log("aoifhosvb")
            console.log(e)
        }
    })
}
gameplay()

// document.querySelector('#newdiv').style.display="flex"
// document.querySelector('#newdiv').style.justifyContent= "center"
// document.querySelector('#newdiv').style.alignContent= "center"

newdiv.style.display="flex"
newdiv.style.justifyContent= "center"
newdiv.style.alignContent= "center"
// let jstyle = document.querySelectorAll(".supabutton")
// jstyle.style.padding = "50px 20px"
// document.addEventListener('DOMContentLoaded',() => { for(let i = 1; i <= sup_btn.length; i++)sup_btn[i].addEventListener("click",() =>{
//     for(let i = 1; i <=5 ; i++){
//        playround(i)
//     }
    
//     champ()
//    })
// })
let newdiv2 = document.createElement('div')
newdiv2.id = "newdiv2"
document.body.appendChild(newdiv2)
let playerText = document.createElement("h2")
playerText.id = "playertext"
playerText.textContent = 'PLayer:'
document.querySelector("#newdiv2").appendChild(playerText)

let compText = document.createElement("h2")
compText.id = "comptxt"
compText.textContent = 'CoMputer:'
document.querySelector("#newdiv2").appendChild(compText)

let result = document.createElement("h2")
result.id = "result"
result.textContent = 'ReSUlt:'
document.querySelector("#newdiv2").appendChild(result)

const platxt = document.querySelector("#playertext")
const cmptxt = document.querySelector("#comptxt")
const resulty = document.querySelector("#result")

let btnplayer;
let cmpbtn;
let relbtn;

sup_btn.forEach(button => button.addEventListener("click", () =>{

    btnplayer = button.innerHTML
    cmpbtn = comp()
    platxt.textContent = `Player: ${btnplayer}`
    cmptxt.textContent = `Computer: ${cmpbtn}`
    resulty.textContent = btnchecker()
}))
function btnchecker(){
    if (btnplayer === cmpbtn){
        return "Tie";
    }
 
    else if( (btnplayer ==='rock' && cmpbtn ==='scissor') ||
       
            (btnplayer ==='paper' && cmpbtn === 'rock') ||
       
            (btnplayer==='scissor' && cmpbtn ==='paper')
    ){
       return "you win"
    }
       else{
        return"computer wins"
        
    }

}

newdiv2.style.textAlign = "center"
newdiv2.style.border = "3px solid"
newdiv2.style.borderRadius = "25px"
newdiv2.style.padding = '50px'
newdiv2.style.backgroundColor = 'lightgrey'
platxt.style.color = "crimson"
cmptxt.style.color = "darksalmon"
resulty.style.color = 'black'