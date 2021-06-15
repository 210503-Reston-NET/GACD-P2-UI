import { Component, OnInit } from '@angular/core';
import { ResultModel } from 'src/Models/ResultModel';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-resultimage',
  templateUrl: './resultimage.component.html',
  styleUrls: ['./resultimage.component.css']
})
export class ResultimageComponent implements OnInit {
  wpmParam: Params;
  result : ResultModel;
  wpm: number;
  constructor(private myRoute: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.result = {
      text : "Keep working at typing!",
      image :"slow"
    };
    
    this.wpm = Number(this.myRoute.snapshot.params.wpm);
    
    if(this.wpm<30){
      this.result.text = "Keep working at typing!";
      this.result.image = "slow";
    }
    else if (this.wpm<50&&this.wpm>30){
      this.result.text = "You're improving!";
      this.result.image = "good";
    }
    else if (this.wpm>50){
      this.result.text= "You're a programming genius!";
      this.result.image = "pro";
    }
  }

}
