import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { State } from 'src/Models/state';
import { TestMaterial } from 'src/Models/TestMaterial';
import { RestService } from 'src/Services/rest.service';

import { Usermodel } from 'src/Models/UserModel';
import {UserService} from 'src/Services/User.service';
import { AppComponent } from 'src/app/app.component';
import { TestModel } from 'src/Models/TestModel';

import { LangSelectComponent } from 'src/app/components/lang-select/lang-select.component';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  langSelected(event: number){
    this.category = event;
    this.newTest()
  }

  constructor(public auth: AuthService, private api: RestService) { }

  ngOnInit(): void{
    //place for category
    this.category=-1;
    this.newTest();

    
    this.state.words = "Hello world!"
    document.documentElement.addEventListener('keydown', function (e) {
      if ( ( e.key) == " ") {
          e.preventDefault();
      }
  }, false);
    
  }

  testmat: TestMaterial = null;

  state: State;
  timeTaken: number;
  wpm: number;
  expectSpace: boolean;
  skip: boolean;
  category: number;


  newTest(): void{
    let id:number = this.category
    this.wpm = 0;
    this.state = {
      words: '',
      wordarray: new Array(),
      typedarray: new Array(),
      enteredText: '',
      errors: 0,
      started: false,
      startTime: null,
      timeTaken: 0,
      letterPosition: 0,
      //wordPosition: 0,
      finished: false,
      correctchars: 0
    }
    this.expectSpace = false
    this.skip = false
    //get content to type
    this.api.getTestContentByCatagoryId(id).then(
      (obj)=> {this.testmat = obj;
        this.state.words = this.testmat.content;
        this.state.wordarray = this.state.words.split('');
        this.state.wordarray= this.state.wordarray.filter(this.isBadChar);
      })
  }

  isBadChar(element: string, index: number, array: any) {
    if((element == "\r") || (element == "\t")){
      return false
    }else{
      return true
    }
 } 

  
  wordsPerMinute (charsTyped: number, ms: number): number {
    return ((charsTyped / 5) / (ms / 60000))
  }  
  
  onWordChange(event: KeyboardEvent): void {
    if(this.state.finished){
      return
    }
    let e = event.key
    if (!this.state.started) {
      this.state.started= true
      this.state.startTime = new Date() 
    }
    let expectedLetter = this.state.wordarray[this.state.letterPosition]

    if(e == "Enter"){
      e="\n"
    }

    if(e == expectedLetter){
      (document.getElementById(`char-${this.state.letterPosition}`) as HTMLElement).style.backgroundColor = "green";
      this.state.correctchars +=1;
      this.state.letterPosition+=1;    
    }else{
      var inp = String.fromCharCode(event.keyCode);
      if (/[a-zA-Z0-9-_ ]/.test(inp)){
        this.state.errors+=1;
      }
    }
   
    if(this.checkIfFinished()){
      return
    }
    if(this.state.wordarray[this.state.letterPosition]=="\n"){
      //display enter prompt
      (document.getElementById(`char-${this.state.letterPosition}`) as HTMLElement).textContent = "⏎\n";
    }    
    (document.getElementById(`char-${this.state.letterPosition}`) as HTMLElement).style.backgroundColor = "blue";
  }
 
  keyIntercept(event: KeyboardEvent): void{
    //check for special keycodes if needed
      this.onWordChange(event)

  } 
    
  focusInputArea(): void{
    console.log("giving focus")
    document.getElementById("input-area").focus()
  }
  checkIfFinished(): boolean {
    let numletters = this.state.wordarray.length-1   

    const wpm = this.wordsPerMinute(this.state.correctchars, new Date().getTime() - this.state.startTime.getTime() )
    this.wpm = Math.floor(wpm);

    //check if words are done
    if(this.state.letterPosition >= this.state.wordarray.length){ 
      const timeMillis: number = new Date().getTime() - this.state.startTime.getTime()
      this.timeTaken = timeMillis;
     
      console.log("#errors", this.state.errors)
      this.state.finished = true;
      this.submitResults()
      return true
     
    }
    return false;
  }

  submitResults(){
    console.log("posting test results")
    let model: TestModel = {
      categoryId: this.category,
      numberofcharacters : this.testmat.content.length,
      numberoferrors: this.state.errors,
      timetakenms : this.timeTaken,
      wpm: this.wpm,
      date: new Date()
    }
    console.log(model)
    this.api.postTestResults(model);
  }



}



