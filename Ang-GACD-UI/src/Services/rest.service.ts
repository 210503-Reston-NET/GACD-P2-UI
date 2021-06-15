import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../environments/environment';
import { TestModel } from 'src/Models/TestModel';
import { LBModel } from 'src/Models/LBModel';
import { TestMaterial } from 'src/Models/TestMaterial';
import { CompModel } from 'src/Models/CompModel';
import { CompetitionContent } from 'src/Models/CompetitionContentModel';
import { CompetitionTestResults } from 'src/Models/CompetitionTestResults';
import { Usermodel } from 'src/Models/UserModel';
import { UserNameModel } from 'src/Models/UserNameModel';
//import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  testcallApi(): Promise<string> {    
    return this.http.get(`${env.dev.serverUrl}api/test/CodeSnippet/Secret`, {responseType: 'text'}).toPromise(); 
  }

  testcallApiPublic(): Promise<string> {
    return this.http.get(`${env.dev.serverUrl}api/test/CodeSnippet`, {responseType: 'text'}).toPromise();      
  }

  testcallApiGetUserInfo(): Promise<string> {
    return this.http.get(`${env.dev.serverUrl}api/test/Test/Secret`, {responseType: 'text'}).toPromise()      
  }

  //production api calls:
  getLeaderBoardByCatagoryId(id: number): Promise<LBModel[]>{
    if(id == 0){
      return this.http.get<LBModel[]>(`${env.dev.serverUrl}api/LB`).toPromise(); 
    }else{
      return this.http.get<LBModel[]>(`${env.dev.serverUrl}api/LB/${id}`).toPromise(); 
    }
  }

  getTestContentByCatagoryId(id: number): Promise<TestMaterial>{
    return this.http.get<TestMaterial>(`${env.dev.serverUrl}api/TypeTest/${id}`).toPromise();
  }
  getCompetitions(): Promise<CompModel[]>{
    return this.http.get<CompModel[]>(`${env.dev.serverUrl}api/Competitions`).toPromise();
  }

  postTestResults(test: TestModel){
    let status = this.http.post(`${env.dev.serverUrl}api/TypeTest`, test);
    status.subscribe(
      (code) => {console.log("status code:", status);} 
    )
    //console.log("status code:", status);
  }

  postCompetitionResults(test: CompetitionTestResults){
    let status =  this.http.post(`${env.dev.serverUrl}api/TypeTest`, test);
    //need to see if status contains the rank from the competition
    console.log("status code:", status);
  }
  postCompetition(comp: CompModel){
    let status = this.http.post(`${env.dev.serverUrl}/api/Competition`, comp);
    console.log("status code:", status);
  }
  getCompetitionContent(id: number):Promise<CompetitionContent>{
    return this.http.get<CompetitionContent>(`${env.dev.serverUrl}api/CompetitionStats/${id}`).toPromise();    
  }
  getloggedInUser():Promise<UserNameModel>{
    return this.http.get<UserNameModel>(`${env.dev.serverUrl}api/User/username`).toPromise();
  }

}
