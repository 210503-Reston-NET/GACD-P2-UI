import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { State } from 'src/Models/state';
import { TestMaterial } from 'src/Models/TestMaterial';
import { RestService } from 'src/Services/rest.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public auth: AuthService, private api: RestService) { }

  ngOnInit(): void {
    this.newTest();
    // this.state.words = this.state.typeTest.split(' ')
    // this.api.getTestContentByCatagoryId(-1).then(
    //   (obj)=> {this.testmat = obj
    //   this.state.words = this.testmat.content.split(' ');
    // })

  }

  newTest(): void{
    this.state.wordsPerMinute = null;
    this.state.words =[]
    this.state.enteredText= ''
    this.state.correctCount= 0
    this.state.started= false
    this.state.startTime= null
    this.state.wordsPerMinute = null

    this.api.getTestContentByCatagoryId(-1).then(
      (obj)=> {this.testmat = obj
      this.state.words = this.testmat.content.split(' ');
    })

  }

  testmat: TestMaterial = null;

  state: State = {
    words: [],
    enteredText: '',
    correctCount: 0,
    started: false,
    startTime: null,
    wordsPerMinute: null
  } 

  inputfield: string;
  
  wordsPerMinute (charsTyped: number, ms: number): number {
    return Math.floor((charsTyped / 5) / (ms / 60000))
  }
  
  onWordChange(): void {
    let e = this.inputfield
    if (!this.state.started) {
      this.state.started= true
      this.state.startTime = new Date() 
    }
    console.log(e)
    const enteredText = e.trim()
    this.state.enteredText = enteredText
    if (enteredText === this.state.words[0]) {
      this.state.correctCount = this.state.correctCount + 1
      this.state.enteredText = '';
      this.state.words = this.state.words.slice(1)
      this.checkIfFinished()
    }
  }
  
    

  checkIfFinished(): void {
    console.log(this.state.words.length)
    if (!this.state.words.length) {
      if (this.state.startTime) {
        const timeMillis: number = new Date().getTime() - this.state.startTime.getTime()
        const wpm = this.wordsPerMinute(this.testmat.length, timeMillis)
        this.state.wordsPerMinute = wpm;
      }
    }
  }

  

}







  // render() {
  //   return (
  //     <div className='App'>
  //       <h1>{this.state.wordsPerMinute ? `${this.state.wordsPerMinute} WPM`
  //                                      : 'Test Your Typing Speed, Scrub!'}</h1>
  //       <h1>{this.state.correctCount}</h1>
  //       <h3>Type the following:</h3>
  //       <h6>{this.state.words.map(word => word === this.state.words[0] ? 
  //             <em className='current-word'>{word} </em> : word + ' ')}</h6>
  //       <input value={this.state.enteredText} 
  //              onChange={this.onWordChange}/>
  //     </div>
  //   )
  // }
