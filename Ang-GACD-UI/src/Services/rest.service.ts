import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../environments/environment';
import { TestModel } from 'src/Models/TestModel';
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
}
