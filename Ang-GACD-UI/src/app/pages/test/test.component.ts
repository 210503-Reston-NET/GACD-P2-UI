import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { State } from 'src/Models/state';
import { TestMaterial } from 'src/Models/TestMaterial';
import { RestService } from 'src/Services/rest.service';

import { Usermodel } from 'src/Models/UserModel';
import {UserService} from 'src/Services/User.service';
import { AppComponent } from 'src/app/app.component';
// import { NodeJS } from '@types/node';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public auth: AuthService, private api: RestService) { }

  ngOnInit(): void{
    //place for category
    this.testString = "Hello world!"
    let testCategory = "Text";
    if(testCategory === "Text"){
    this.timeLimit = 60;
    }else{
      this.timeLimit = 120;
    }
    this.timeRemaining = this.timeLimit;
  }

  // Time Limit
 
  // selecting required elements
  // timer_text = document.getElementById(".timerValue") as HTMLDivElement;
  // error_text = document.getElementById(".errorsValue") as HTMLDivElement;
  // charactersTyped_text = document.getElementById("charactersTypedValue") as HTMLDivElement; 
  //quote_text = document.getElementById("snippet_area") as HTMLDivElement;
  input_area = document.getElementById(".entry_area") as HTMLTextAreaElement;
  //let restart_btn = document.getElementById(".restart_btn") as HTMLButtonElement;
  //let chracters_group = document.getElementById(".typeCount") as HTMLAnchorElement;
  //let erraor_group = document.getElementById(".error") as HTMLAnchorElement;
  testString:string;
  timeLimit: number = 0;
  timeRemaining: number = 0;
  timeElapsed: number = 0;
  total_errors: number = 0;
  errors: number = 0;
  characterTyped: number = 0;
  current_quote: string = "";
  quoteNo: number= 0;
  timer: NodeJS.Timeout;
  currentInput: string;
  started: boolean = false;


  ResetGame(): void{
      this.timeElapsed = 0;
      this.errors = 0;
      this.characterTyped = 0;
      this.testString = "";
  }


  ProcessText(): void{
      //get the current input and split
      // let currentInput: string = this.input_area.value;
      if(!this.started){
        //console.log(this.timeRemaining)
        this.started = true;
        this.startGame();
      }
      
      let typedChars :string[]  = this.currentInput.split("");
      
      // increment total characters typed
      this.characterTyped++;
      
      this.errors = 0;
      
      let quote:String = this.testString;
      let charsToType= quote.split("")
      charsToType.forEach((char, index) => {
        let typedChar = typedChars[index]
        clearInterval(this.timer);
        this.timer = setInterval(() => 
        {
          console.log(this.timeRemaining)
            if(this.timeRemaining > 0){
              this.timeRemaining--;
              this.timeElapsed++;
            }else{
              clearInterval(this.timer)
              this.input_area.readOnly = true
            }
          }, 1000);
        
        if (typedChar == null) {
          //set character color to normal character color from stylesheet
        } else if (typedChar != char) {
          //set character color to red "#8B0000";
      
          // increment number of errors
          this.errors++;
        }
      });  
      this.total_errors = this.errors;
  }
  startGame() { 
      
    //this.resetValues();    
    // clear old and start a new timer
    clearInterval(this.timer);
    //setInterval(this.RunTimer, 1000);
    //console.log(this.timeRemaining)
  }
    
  resetValues() {
    this.timeRemaining = this.timeLimit;
    this.timeElapsed = 0;
    this.errors = 0;
    this.total_errors = 0;
    this.characterTyped = 0;
        //reset the value of the input area
    //reset the value of the quote area
  }

}


  // FinishGame(): void{
  //   clearInterval(this.timer)
  //   this.input_area.readOnly = true
  // }

  // RunTimer(): void{
  //   console.log(this.timeRemaining)
  //   if(this.timeRemaining > 0){
  //     this.timeRemaining--;
  //     this.timeElapsed++;
  //      // this.timeRemaining
  //   }else{
  //     this.FinishGame();
  //   }
  // }




  //Garretts code
  // ngOnInit(): void {
  //   this.newTest();
  //   // this.state.words = this.state.typeTest.split(' ')
  //   // this.api.getTestContentByCatagoryId(-1).then(
  //   //   (obj)=> {this.testmat = obj
  //   //   this.state.words = this.testmat.content.split(' ');
  //   // })

  // }

  // newTest(): void{
  //   this.state.wordsPerMinute = null;
  //   this.state.words =[]
  //   this.state.enteredText= ''
  //   this.state.correctCount= 0
  //   this.state.started= false
  //   this.state.startTime= null
  //   this.state.wordsPerMinute = null

  //   this.api.getTestContentByCatagoryId(-1).then(
  //     (obj)=> {this.testmat = obj
  //     this.state.words = this.testmat.content.split(' ');
  //   })

  // }

  // testmat: TestMaterial = null;

  // state: State = {
  //   words: [],
  //   enteredText: '',
  //   correctCount: 0,
  //   started: false,
  //   startTime: null,
  //   wordsPerMinute: null
  // } 

  // inputfield: string;
  
  // wordsPerMinute (charsTyped: number, ms: number): number {
  //   return Math.floor((charsTyped / 5) / (ms / 60000))
  // }
  
  // onWordChange(): void {
  //   let e = this.inputfield
  //   if (!this.state.started) {
  //     this.state.started= true
  //     this.state.startTime = new Date() 
  //   }
  //   console.log(e)
  //   const enteredText = e.trim()
  //   this.state.enteredText = enteredText
  //   if (enteredText === this.state.words[0]) {
  //     this.state.correctCount = this.state.correctCount + 1
  //     this.state.enteredText = '';
  //     this.state.words = this.state.words.slice(1)
  //     this.checkIfFinished()
  //   }
  // }
  
    

  // checkIfFinished(): void {
  //   console.log(this.state.words.length)
  //   if (!this.state.words.length) {
  //     if (this.state.startTime) {
  //       const timeMillis: number = new Date().getTime() - this.state.startTime.getTime()
  //       const wpm = this.wordsPerMinute(this.testmat.length, timeMillis)
  //       this.state.wordsPerMinute = wpm;
  //     }
  //   }
  // }