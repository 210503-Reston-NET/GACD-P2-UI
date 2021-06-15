import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usermodel } from "../Models/UserModel"
import { StatModel } from 'src/Models/StatModel';

@Injectable({
  providedIn: 'root'
})