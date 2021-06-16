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
  category: number = -1;
  snippet: string = '';
  author: string = '';
  name: string;
  // profileJson: string = null;
  constructor(public auth: AuthService, private api: RestService) { }

  langSelected(event: number){
    this.category = event;
    this.newSnippet()
  }
  

  ngOnInit(): void {
    this.category = -1;
    this.newSnippet();   
  }

  newSnippet(){
    this.api.getTestContentByCatagoryId(this.category).then(
      (obj)=> {
        this.snippet = obj.content
        this.author = obj.author 
      })
  }
  CreateCompetition(): void{
   
    this.UserName = new UserNameModel;
    let startDate = new Date();
    let endDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    this.api.getloggedInUser().then(user => {this.UserName = user
      if(this.UserName.userName){
        this.author = this.UserName.userName
      }else{
        this.author = this.UserName.name
      }
      let newComp: CompModel = 
      {
        start: startDate,
        end: endDate,
        category: this.category,
        name: this.name,
        snippet: this.snippet,
        author: this.author,
        compId: null
      };
       //console.log(this.name);
      // console.log(endDate);
      // console.log(newComp.author);
      this.api.postCompetition(newComp);
      }    
    );   
   }
}
