import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usermodel } from "../Models/UserModel"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private testURL = 'http://localhost:3000/User'

  constructor(public http : HttpClient) { 
   
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

GetAllMembers(): Observable<Usermodel>{
  return this.http.get<Usermodel>(this.testURL).pipe();
}

}