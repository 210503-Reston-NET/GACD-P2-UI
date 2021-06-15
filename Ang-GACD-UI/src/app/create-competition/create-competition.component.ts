import { Component, OnInit } from '@angular/core';
import { CompModel } from "src/Models/CompModel";
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { RestService } from 'src/Services/rest.service';
import { UserNameModel } from 'src/Models/UserNameModel';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { LangSelectComponent } from 'src/app/components/lang-select/lang-select.component';
@Component({
  selector: 'app-create-competition',
  templateUrl: './create-competition.component.html',
  styleUrls: ['./create-competition.component.css']
})
export class CreateCompetitionComponent implements OnInit {
  UserName: UserNameModel;
  profileJson: string = null;
  constructor(public auth: AuthService, private api: RestService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
    );
  }
  CreateCompetition(): void{

    this.UserName = new UserNameModel;
    let startDate = new Date();
    let endDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    this.api.getloggedInUser().then(user => {this.UserName = user
      let newComp: CompModel = 
      {
        start: startDate,
        end: endDate,
        category: 1,
        name: document.querySelector<HTMLInputElement>('#name')!.value,
        snippet: document.querySelector<HTMLInputElement>('#snippet')!.value,
        author: this.UserName.name
      };
      console.log(startDate);
      console.log(endDate);
      console.log(newComp.author);
      this.api.postCompetition(newComp);
      }    
    );   
  }
}
