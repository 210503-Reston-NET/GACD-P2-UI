import { Component } from '@angular/core';
import { Usermodel } from 'src/Models/UserModel';
import {UserService} from 'src/Services/User.service';
import { AppComponent } from 'src/app/app.component';

// Time Limit
let timeLimit: number;
//place for category

let testCategory = "Text";
if(testCategory === "Text"){
timeLimit = 60;
}else{
    timeLimit = 120;
}
// selecting required elements
let timer_text = document.getElementById(".timerValue") as HTMLDivElement;
let error_text = document.getElementById(".errorsValue") as HTMLDivElement;
let charactersTyped_text = document.getElementById("charactersTypedValue") as HTMLDivElement; 
let quote_text = document.getElementById("snippet_area") as HTMLDivElement;
let input_area = document.getElementById(".entry_area") as HTMLTextAreaElement;
//let restart_btn = document.getElementById(".restart_btn") as HTMLButtonElement;
//let chracters_group = document.getElementById(".typeCount") as HTMLAnchorElement;
//let erraor_group = document.getElementById(".error") as HTMLAnchorElement;
let testString:string;
let timeRemaining = timeLimit;
let timeElapsed = 0;
let total_errors = 0;
let errors = 0;
let characterTyped = 0;
let current_quote = "";
let quoteNo = 0;
let timer: NodeJS.Timeout;


function Start(){
testString = "Since fours veiling shadow Minas Morgul crawl. Finer back falls filth Pippin's guardian!"
timer_text.textContent = timeRemaining.toString();
}
function ResetGame(){
    timeElapsed = 0;
    errors = 0;
    characterTyped = 0;
    testString = "";
}
function ProcessText(){
    //get the current input and split
    let currentInput: string = input_area.value;
    let typedChars :string[]  = currentInput.split("");
    
    // increment total characters typed
    characterTyped++;
    
    errors = 0;
    
    let quote:String = quote_text.textContent;
    let charsToType= quote.split("")
    charsToType.forEach((char, index) => {
      let typedChar = typedChars[index]
      clearInterval(timer);
      timer = setInterval(RunTimer, 1000);
      
      if (typedChar == null) {
        //set character color to normal character color from stylesheet
      } else if (typedChar != char) {
        //set character color to red "#8B0000";
    
        // increment number of errors
        errors++;
      }
    });
    
    // display the number of errors
    //if(error_text != null)
    {
     //   error_text.value = errors.toString();
    }
    
    // update accuracy text
    
    
    // irrespective of errors
  
      // update total errors
      total_errors = errors;
    
      // clear the input area
}
function finishGame() {
  clearInterval(timer);
   input_area.readOnly = true
   
   //send data to backend to create new tests object
            //send userstatsId, errors, wordsTyped and timeTaken
            //get todays date and send that
  }
  function RunTimer() {
    if(timeRemaining > 0){
        timeRemaining--;
        timeElapsed++;
        timer_text.textContent = timeRemaining.toString();
    } 
    else{
        finishGame();
    }

  }
  
  function startGame() {
  
    resetValues();
  
    // clear old and start a new timer
    clearInterval(timer);
    setInterval(RunTimer, 1000);
  }
  
  function resetValues() {
    timeRemaining = timeLimit;
    timeElapsed = 0;
    errors = 0;
    total_errors = 0;
    characterTyped = 0;
        //reset the value of the input area
    //reset the value of the quote area
  }