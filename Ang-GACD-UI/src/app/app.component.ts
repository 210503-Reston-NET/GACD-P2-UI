import { Component } from '@angular/core';
import { Usermodel } from 'src/Models/UserModel';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from 'src/Services/User.service';
import { TestService } from 'src/Services/Test.Service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kwik-Koder';

  User: any = [];
  Test: any;

  constructor(private userserv : UserService, public auth: AuthService, private testserv : TestService){
  }

  ngOnInit(){
    this.GenerateUsers();
  }

  GenerateUsers()
  {
    return this.userserv.GetAllMembers().subscribe((data: {}) => {
      this.User = data;
    })
  }

  GenerateTest()
  {
    return this.testserv.GenerateTest().subscribe((data: {}) => {
      this.Test = data;
    })
  }
  AnalyzeTest(testString = '', Userinput= ''){
    
  }
}
