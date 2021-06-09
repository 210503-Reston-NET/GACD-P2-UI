import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';

interface Message {
   message: string;
}

@Component({
  selector: 'app-apitest',
  templateUrl: './apitest.component.html',
  styleUrls: ['./apitest.component.css']
})
export class ApitestComponent implements OnInit {

  message: string = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  callApi(): void {
    this.http
    .get(`${env.dev.serverUrl}api/test/CodeSnippet/secret`, {responseType: 'text'})
    .subscribe((result) => {
      this.message = result;
    });
  }

  callApiPublic(): void {
    this.http
      .get(`${env.dev.serverUrl}api/test/CodeSnippet`, {responseType: 'text'})
      .subscribe((result) => {
        this.message = result;
      });
  }
}
