import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import {RestService} from '../../../Services/rest.service';
import { TestMaterial } from 'src/Models/TestMaterial';
import { Language } from 'src/Models/LanguageEnum';


@Component({
  selector: 'app-apitest',
  templateUrl: './apitest.component.html',
  styleUrls: ['./apitest.component.css']
})
export class ApitestComponent implements OnInit {
  testmat: TestMaterial  = null;
  message: string = null;
  languageId: number;

  constructor(private api: RestService) { }

  ngOnInit(): void {
  }

  callApi(): void {
      this.api.testcallApi().then((str) => {this.message = str});
  }

  callApiPublic(): void {
    this.api.testcallApiPublic().then((str) => {this.message = str});
  }

  callApiGetUserInfo(): void {
    this.api.testcallApiGetUserInfo().then((str) => {this.message = str});
  }

  testEndpoint(id: number): void{
    
    this.api.getTestContentByCatagoryId(id).then((str)=> {this.testmat = str});

  }
}
