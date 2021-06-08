import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Usermodel } from "../Models/UserModel"

@Injectable()
export class UserService {
  private testURL = 'http://localhost:3000/User'

  constructor(public http : Http) { 
   
  }

public GetAllMembers(): Observable<Usermodel[]>{
  return this.http.get(this.testURL).pipe(map((res: { json: () => any; }) => res.json()));
}

}