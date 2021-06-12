import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../environments/environment';
import { TestModel } from 'src/Models/TestModel';
import { LBModel } from 'src/Models/LBModel';
import { TestMaterial } from 'src/Models/TestMaterial';
import { CompModel } from 'src/Models/CompModel';
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
    return this.http.get<LBModel[]>(`${env.dev.serverUrl}api/LB/${id}`).toPromise();
  }

  getTestContentByCatagoryId(id: number): Promise<TestMaterial>{
    return this.http.get<TestMaterial>(`${env.dev.serverUrl}api/TypeTest/${id}`).toPromise();
  }
  getCompetitions(): Promise<CompModel[]>{
    return this.http.get<CompModel[]>(`${env.dev.serverUrl}api/Competitions`).toPromise();
  }

  postTestResults(test: TestModel){
    return this.http.post(`${env.dev.serverUrl}api/TypeTest`, test);
  }

  postCompetitionResults(test: TestModel){
    return this.http.post(`${env.dev.serverUrl}api/TypeTest`, test);
  }

}
