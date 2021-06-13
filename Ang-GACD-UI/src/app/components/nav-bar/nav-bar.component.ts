import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: [
    './nav-bar.component.css'
  ]
})
export class NavBarComponent implements OnInit {
  isCollapsed = false;
  loadingImg =
  'https://api.freelogodesign.org/files/4981cd4ed1774227824e712939d53c78/thumb/logo_200x200.png?v=637588683320000000';
  constructor() {    
  }
  
  ngOnInit(): void {
  }

}
