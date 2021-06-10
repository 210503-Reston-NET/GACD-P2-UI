import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usermodel } from "../Models/UserModel"

@Injectable({
providedIn: 'root'
})
export class TestService {
    private quoteURL = 'http://kwickkoderrest.azurewebsites.net/api/test/'

constructor(public http : HttpClient) { 

}
httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
}

//method used to create a random test for user to take
GenerateTest(): any{
    return this.http.get(this.quoteURL + 'RandomQuote').pipe();
}

}