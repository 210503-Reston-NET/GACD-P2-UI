import { Component, OnInit } from '@angular/core';
import { CompStatModel } from 'src/Models/CompStatModel';
import { ActivatedRoute, Params } from '@angular/router';
import { RestService } from 'src/Services/rest.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-competition-result',
  templateUrl: './competition-result.component.html',
  styleUrls: ['./competition-result.component.css']
})
export class CompetitionResultComponent implements OnInit {
  compStatModels : CompStatModel[];
  compId: number;
  constructor(private myRoute: ActivatedRoute, private api: RestService, private router: Router) { }

  ngOnInit(): void {
    this.compId = Number(this.myRoute.snapshot.params.compId);
    this.api.getCompetitionResults(this.compId).then(res => {this.compStatModels = res; console.log(res)});  
  }

  TakeTest(): void{
    this.router.navigate(['./CompetitionTest/',this.compId]).then();
  }
}
