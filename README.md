# ROck-Paper-scissor
This is  a rock paper scissor game!

IMPORTANT:- Consult the console in the developer tool!(Presuming the reader is familiar with the said feature.)

1.Starting the game!

  (a):-Press to button to start the game.
  (b):-A pop up appears where you must choose between rock,paper or scissors.  (If nothing is given as the answer the message will change to null)
  (c):-The game will be played five time continously.
  (d):-After finishing the game,the result will be given along with the hands played.
  (e):-You can press the replay button if you wish to play more.

2.Understanding the code.

(a)The first variable "choices" is an array containing the option that will be used in the game.

(b)This variable "winners" is an empty array.(will be discussed later)

 
  (i)The first function you may see will be function game()
   
    -What it does is it loops the function playround() (which will be discussed next) 5 times along with a 
    document.querySelector for the button at the start of the game so that when the game is over it changes the ""Textcontent""(2x double quotation mark to highlight) of the button from "Start game" to "Replay" to make it more interactive.

  (ii):-Function playround() along with parameter i to mark the amount of round played; this happens because the i is a variable declared in the for loop and is called under the scope(argument) of the loop.

    -This function declares a set of variable "play" and "computer" which again calls the function player() and comp() respectively.
        The variable winner calls a function checker().(Function will be discussed later) and the next "winners.push(winner)" is an array method which pushes or adds the winner of a round under the empty array winners after it is checked by the function checker().The ".push(winner)" is a array method with the parameter winner which calls the variable winner and which in turn calls the function checker() and the data given by the checker() to winner is pushed to the array variable "winners".And lastly the function champround() which will be discussed later.
    
    Be noted that this function are called one after another

  (iii):-The variable or function player() ask for an input which if cancelled will end the session which a alert message and break the while loop but it you didn't cancel and wrote, say rock (irrespective of the capitalization) the game will continue but if you write anything other than rock,paper or scissor the while loop checks by the variable "variable" if the input is fales i.e if you wrote rock,paper and scissor than it returns true if not then it returns false and it changes the prompt message to "RPS" and the round resets and if you didn't write anything and passed it on,the other while loop changes the prompt message to "It's null" after each successive round (iteration) it returns the input.
      The variable check calls a function validateInput(choice) which returns the value to the function after it include the data of the array varaible "choices" to its parameter "choice" which is used to check the input of the player by the variable "check".If you notice it says in the variable "check" validateInput(input) which assures the input is anything under the array variable "choices" since the choice parameter recieves its data from the array variable "choices".
  (iv) The comp variable or function is a function which using the method Math.floor rounds up the Math.random to the nearest integer i.e 1 and the random method multiplied by the length of the variable "choices" and what this accomplish is that since the number of data in array variable "choices" is 3 and the data inside the array can be called numerically which usually starts from 0 which means the firt data in our choises which is rock will be 1,paper will be 2 and scissor will be 3, the Math.random creates a random number between 0 and 1 which is then multiplied by 3 and then after getting rounded to the closest integer by Math.floor makes the chance of getting rock,paper and scissor 1/3 and after this is done it returns the value.
  
  And both this function and the function player() is called by the variable computer and variable play() respectively in the function playround() if you remember.

  (v) This function checker(play, computer) the parameter are the varaible in the function playround() and this two variable calls the other functions which you must be familiar by now And this function checker() is called by the variable "winner".What this function checker() basically does it it compares the input of player (after all the validation and while loop) and the computer and decide who wins; which is done by the "if" "else if" and "else" condition which if the input of the player and computer is strictly equal returns tied and following the if statement is the else if which contains the means of victory for the player("||" this means or) and if any of it is true it return "you win" and if false it automatically declares computer the victor followed by the return "computer wins".
  
  (vi)Function champ() declares three varible "playerwin", "computer" and "ties" and all of them following the same syntax which basically calls the array variable "winners" where the data from variable "winner" after it had played a round, checked the content of it and declared the winner and ties i.e the value returned in the function checker()which is "you win", "computer wins", "Ties" is pushed to the empty array "winners".
  now with the method filter where the item is function or a value where the item if equal to the said string that is available in the array "winners" is only taken and is multiplied by the number of times the said string is available in the "winners". ex: we filter the "winners" to check if item(which could be anything its just a name!) is equal to "you win" and after a round the data stored on the "winners" and it has a two "you win" and that 2 "you win" after eliminating or filtering the rest of the content of the "winners" is passed to the variable "playerwins" but instead of two "you win" it gives it the number 2 since the length method was used to check how many of them are in their and the same follows for the others except which different interest i.e all of them with different things to filter.
    And then using console.log the following result of the variables are printed.(Here i used ${} method, it could be any other method)

    This function is called under the function playround() which makes it look more appealing and because of it this function only appears after the game has ended.

(iv)Function champround() with four parameters "round" "player" "computer" "winner" where it uses console.log to check the round number and the hands of the player and computer is shown, the function player() input and function computer() random selection is used in this case and the variable winner which performs the checker() function and then receives a value and then this value is showcased.The console.log with the fullstop is to ocupy a space in the console to make them distinctive since this process is done every round played.



And there you go with the details.Hope you are content with the README file, this took some of my study time but it was worth it i suppose. well good luck!

  Now i must study since the exam are close, well i will be adding new things to make this game better and hopefully stop procastinating and finally be able to master this programming language, i have been trying to learn programming for 3 years but never been able to whether it's me changing language or getting bored or me just slacking off but i will now defintely learn or i mean master this. keep up the work, hmm you read quite a lot by now haha its fine rest now and bye.

-Thank you 