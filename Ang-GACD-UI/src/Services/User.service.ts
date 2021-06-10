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

GetAllMembers(): Promise<Usermodel>{
  return this.http.get<Usermodel>(this.testURL).toPromise();
  //return fetch(this.testURL)
}

GetMember(id: number): Promise<Usermodel>{
  return this.http.get<Usermodel>(this.testURL + id).toPromise();
}
CreateUser(newuser: Usermodel): Observable<Usermodel>{
  return this.http.post<Usermodel>(this.testURL,
    JSON.stringify(newuser), 
    this.httpOptions).pipe();
}

}