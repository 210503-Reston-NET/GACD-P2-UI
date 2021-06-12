import { Component, OnInit } from '@angular/core';
import { CompModel } from 'src/Models/CompModel';
import { RestService } from 'src/Services/rest.service';

@Component({
  selector: 'app-view-competitions',
  templateUrl: './view-competitions.component.html',
  styleUrls: ['./view-competitions.component.css']
})
export class ViewCompetitionsComponent implements OnInit {
  CompModels: CompModel[]
  CurrentCompModels: CompModel []
  constructor(private api:RestService) { }

  ngOnInit(): void {
    this.api.getCompetitions().then(res => this.CompModels = res);
    this.CurrentCompModels = this.CompModels.filter((CompModel)=>((CompModel.endDate) < new Date()));
  }

}
