import { Component, OnInit } from '@angular/core';
import { CompStatModel } from 'src/Models/CompStatModel';
import { BetInputModel } from 'src/Models/BetInputModel';
import { ActivatedRoute, Params } from '@angular/router';
import { RestService } from 'src/Services/rest.service';
import {Router} from "@angular/router";
import { faSync } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-competition-result',
  templateUrl: './competition-result.component.html',
  styleUrls: ['./competition-result.component.css']
})
export class CompetitionResultComponent implements OnInit {
  compStatModels : CompStatModel[];
  compId: number;
  constructor(private myRoute: ActivatedRoute, private api: RestService, private router: Router) { }
  faSync = faSync;
  
  ngOnInit(): void {
   this.getResults()
  }

  getResults(): void{
    this.compId = Number(this.myRoute.snapshot.params.compId);
    this.api.getCompetitionResults(this.compId).then(res => {this.compStatModels = res; console.log(res)});
  }

  TakeTest(): void{
    this.router.navigate(['./CompetitionTest/',this.compId]).then();
  }
  PlaceBet(id : number): void {
    let bet : BetInputModel = {
      userBetOn : id,
      compId : this.compId,
      betAmount : 100
    }
    this.api.putBet(bet);
  }
}
