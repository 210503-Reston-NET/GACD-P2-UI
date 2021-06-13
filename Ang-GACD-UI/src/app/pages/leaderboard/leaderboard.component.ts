import { Component, OnInit } from '@angular/core';
import { LBModel } from 'src/Models/LBModel';
import { RestService } from 'src/Services/rest.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  LBModels: LBModel[]
  FilteredLBModels: LBModel []
  catId : number
  constructor(private api: RestService) { 
    //this.catId = id;
  }

  ngOnInit(): void {
    this.api.getLeaderBoardByCatagoryId(6).then(res => this.LBModels = res);    
  }
  GetBestUsers(id:number): void{
    this.api.getLeaderBoardByCatagoryId(id).then(res => this.LBModels = res);  
  }
  public SearchLetters(letterString:string) :void{
    if(letterString) this.FilteredLBModels = this.LBModels.filter((LBModel)=>LBModel.UserName.includes(letterString))
    else this.FilteredLBModels = this.LBModels
  }

}
