import { Component } from '@angular/core';
import { Usermodel } from 'src/Models/UserModel';
import { AuthService } from '@auth0/auth0-angular';
//import { UserService } from 'src/Services/User.service';
//import { TestService } from 'src/Services/Test.Service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Kwik-Koder';
  darkModeActive: boolean;

  User: any = [];
  Test: any;
  profileJson: string = null;

  constructor(public auth: AuthService){
  }

  ngOnInit(){
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
    );
  }

  


  
  AnalyzeTest(testString = '', Userinput= ''){
    
  }
}
