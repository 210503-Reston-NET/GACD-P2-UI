import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { State } from 'src/Models/state';
import { TestMaterial } from 'src/Models/TestMaterial';
import { RestService } from 'src/Services/rest.service';

import { Usermodel } from 'src/Models/UserModel';
import {UserService} from 'src/Services/User.service';
import { AppComponent } from 'src/app/app.component';
import { TestModel } from 'src/Models/TestModel';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public auth: AuthService, private api: RestService) { }

  ngOnInit(): void{
    //place for category
    this.newTest(-1);
    this.state.words = "Hello world!"
  }

  testmat: TestMaterial = null;

  state: State;
  timeTaken: number;
  wpm: number;
  expectSpace: boolean;
  skip: boolean;
  


  newTest(id: number): void{
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
      wordPosition: 0,
      finished: false,
      correctchars: 0
    }
    this.expectSpace = false
    this.skip = false
    //get content to type
    this.api.getTestContentByCatagoryId(-1).then(
      (obj)=> {this.testmat = obj;
      this.state.words = this.testmat.content;
      let arr = this.state.words.split(' ');
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let letters = element.split('');
        this.state.wordarray.push(letters)
      }
    })
  }

  
  wordsPerMinute (charsTyped: number,errors: number, ms: number): number {
    return (((charsTyped / 5) - errors) / (ms / 60000))
  }

  
  onWordChange(): void {
    if(this.state.finished){
      return
    }
    if(this.skip){
      this.skip = false
      return
    }
    let e = this.state.enteredText
    if (!this.state.started) {
      this.state.started= true
      this.state.startTime = new Date() 
    }

    let expectedLetter = this.state.wordarray[this.state.wordPosition][this.state.letterPosition]
    console.log("e: ",expectedLetter, "got: ", e.charAt(e.length-1))
    // console.log("got: ",e.charAt(e.length-1))
    if(e.charAt(e.length-1) == ' '){
      
      this.state.correctchars +=1;
      
      this.state.wordPosition+=1;
      this.state.letterPosition = 0
    }else if(e.charAt(e.length-1) == expectedLetter){
      this.state.correctchars +=1;
      // advance letter
      if(this.state.letterPosition < this.state.wordarray[this.state.wordPosition].length){
       
        this.state.letterPosition+=1;
      }else{
        //need to wait for space
        this.state.letterPosition+=1;
        
      }
      
      
    }
    this.checkIfFinished()
  }

  keyIntercept(event: KeyboardEvent): void{
    //check if backspace key was pressed
    if(event.key == "Backspace"){
      this.skip = true
      //Go back a word or a letter
      //also subtract from correct char if letter was correct
      
      if(this.state.letterPosition > 0){
        
        let expectedLetter = this.state.wordarray[this.state.wordPosition][this.state.letterPosition-1]
        let e = this.state.enteredText
        console.log("dec?:",e.charAt(e.length-1), expectedLetter)

        //if deleted char is space do nothing
        if(e.charAt(e.length-1) == ' '){
          this.state.wordPosition -=1;
          this.state.correctchars -= 1;
        }
       
        if(e.charAt(e.length-1) == expectedLetter){
          this.state.letterPosition-=1;
          this.state.correctchars -=1;
        }
        
      }else{
        //check if current word is >0
        if(this.state.wordPosition > 0){
          let expectedLetter = this.state.wordarray[this.state.wordPosition][this.state.letterPosition-1]
          let e = this.state.enteredText
          console.log("uss")

          this.state.correctchars -=1;

          this.state.wordPosition-=1;
          //also set letterposition
          this.state.letterPosition = this.state.wordarray[this.state.wordPosition].length
        }
      }
    }else{

    }
  } 
    

  checkIfFinished(): void {
    let numwords = this.state.wordarray.length-1
    let numletters = this.state.wordarray[numwords].length
    //console.log((this.state.wordPosition > numwords))
    //console.log((this.state.wordPosition > numwords), (this.state.letterPosition == numletters))

    //check if words are done
    if((this.state.wordPosition > numwords) ||((this.state.wordPosition >= numwords) && (this.state.letterPosition == numletters))){
      // if (this.state.startTime) {
      const timeMillis: number = new Date().getTime() - this.state.startTime.getTime()
      this.timeTaken = timeMillis;
      
      //number of errors is length - correct chars + # spaces
      this.state.errors = this.testmat.content.length - this.state.correctchars
      console.log("#errors", this.state.errors)
      const wpm = this.wordsPerMinute(this.testmat.content.length,this.state.errors, this.timeTaken)
      this.wpm = wpm;
      console.log(this.wpm)
      this.state.finished = true;
    }
  }

  submitResults(){
    let model: TestModel = {
      catagoryId: this.testmat.catagoryId,
      numberofcharacters : this.testmat.content.length,
      numberoferrors: this.state.errors,
      timetakenms : this.timeTaken,
      date: new Date()
    }
    this.api.postTestResults(model);
  }

}



