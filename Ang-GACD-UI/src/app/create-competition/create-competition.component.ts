import { Component, OnInit } from '@angular/core';
import { CompModel } from "src/Models/CompModel";
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { RestService } from 'src/Services/rest.service';
import { UserNameModel } from 'src/Models/UserNameModel';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { LangSelectComponent } from 'src/app/components/lang-select/lang-select.component';
import { SnackBarComponent } from '../components/snack-bar/snack-bar.component';
import { DatePipe } from '@angular/common';

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
  compUrl: string;
  startDate: string;
  endDate: string;
  realEndDate: Date;
  realStartDate: Date;

  constructor(public auth: AuthService, private api: RestService, public snackBar: SnackBarComponent, public datePipe:DatePipe) { }

  langSelected(event: number){
    this.category = event;
    this.newSnippet()
  }
  

  ngOnInit(): void {
    this.category = -1;
    this.realStartDate = new Date()
    this.realEndDate = this.realStartDate;

    this.realStartDate.setMinutes(this.realStartDate.getMinutes() - this.realStartDate.getTimezoneOffset());
    this.startDate = this.realStartDate.toISOString().slice(0,16)
    this.realEndDate = this.realStartDate;
    
    
   
    
    //this.realEndDate.setDate(this.realEndDate.getDate()+7)
    //this.realEndDate.setMinutes(this.realEndDate.getMinutes() - this.realEndDate.getTimezoneOffset());
    this.realEndDate.setDate(this.realEndDate.getDate() +7)
    this.endDate = this.realEndDate.toISOString().slice(0, 16);


    console.log("startDate: ", this.startDate)
    console.log("endDate", this.endDate)
    console.log("realstartDate: ", this.realStartDate)
    console.log("realendDate", this.realEndDate)
    
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
    console.log("finished start date:", this.startDate)
    console.log("finished end date:", this.endDate)
    
    this.realEndDate = new Date(this.endDate);
    this.realStartDate = new Date(this.startDate);

    
    // var utc = new Date(this.realEndDate.getTime() + this.realEndDate.getTimezoneOffset() * 60000);
    // console.log(utc)

    console.log("after conv")
    console.log( this.realStartDate)
    console.log(this.realEndDate)
    
    
    // this.datePipe.transform(this.realEndDate, 'yyyy-MM-dd HH:mm:ss');
    // this.datePipe.transform(this.realStartDate, 'yyyy-MM-dd HH:mm:ss');
   
    this.UserName = new UserNameModel;

    this.api.getloggedInUser().then(user => {this.UserName = user
      if(this.UserName.userName){
        this.author = this.UserName.userName
      }else{
        this.author = this.UserName.name
      }
      if(!this.name){
        //show error
        this.snackBar.displayError("Must Include Competition Name");
        return;
      }


      let newComp: CompModel = 
      {
        start: this.realStartDate,
        end: this.realEndDate,
        category: this.category,
        name: this.name,
        snippet: this.snippet,
        author: this.author,
        compId: 0
      };

      this.api.postCompetition(newComp);
      this.snackBar.displaySuccess("Competition Added!");
      }    
    );   
   }

   


   
}
