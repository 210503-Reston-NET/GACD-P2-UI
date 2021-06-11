import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { State } from 'src/Models/state';
import { TestMaterial } from 'src/Models/TestMaterial';
import { RestService } from 'src/Services/rest.service';

import { Usermodel } from 'src/Models/UserModel';
import {UserService} from 'src/Services/User.service';
import { AppComponent } from 'src/app/app.component';
import { TestModel } from 'src/Models/TestModel';
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
    this.setupGame(-1);
    this.state.words = "Hello world!"
  }

  testmat: TestMaterial = null;

  state: State = {
    words: '',
    enteredText: '',
    errors: 0,
    started: false,
    startTime: null,
    timeTaken: 0,
  } 


  startTime: number;
  timeTaken: number;

  
  characterTyped: number = 0;
  current_quote: string = "";
  quoteNo: number= 0;
  wpm: number;
  

  ResetGame(): void{

      this.characterTyped = 0;     
  }


  ProcessText(): void{
      let typedChars :string[]  = this.state.enteredText.split("");
      let quote:String = this.state.words;
      let charsToType= quote.split("");
      if(!this.state.started){
        //console.log(this.timeRemaining)
        this.state.started = true;
        this.state.errors = 0;
        this.startTime = new Date().getTime();       
      }
      charsToType.forEach((char, index) => {
        let typedChar = typedChars[index]       
        if (typedChar == null) {
          //set character color to normal character color from stylesheet
        } else if (typedChar != char) {
          //set character color to red "#8B0000";
          this.state.errors++;
        }
      });
      this.characterTyped = typedChars.length;
      if(this.characterTyped >= charsToType.length)
      {  
        this.timeTaken = (new Date().getTime() - this.startTime);
        let seconds:number = this.timeTaken/1000;
        let totalWords = this.characterTyped / 5;
        let wpm = totalWords/seconds;
        
      }
  }
  setupGame(id: number) {
    this.state = {
      words: '',
      enteredText: '',
      errors: 0,
      started: false,
      startTime: null,
      timeTaken: 0,     
    }
    //get quote/snippet
    this.api.getTestContentByCatagoryId(id).then((obj)=> {this.testmat = obj; this.state.words = this.testmat.content})
    //reset values:
    
  }
    


  finishTest() {

  }

  RecordResults() {
    let results: TestModel;

    results.numberoferrors = 0;
    results.numberofcharacters =  this.state.errors
    results.timetakenms = this.state.timeTaken;
    results.date = new Date()
  
    this.api.postTestResults(results)
  }

}





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