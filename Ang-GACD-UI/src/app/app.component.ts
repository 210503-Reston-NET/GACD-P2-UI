import { Component } from '@angular/core';
import { Usermodel } from 'src/Models/UserModel';
import {UserService} from 'src/Services/User.service';
import { AuthService } from '@auth0/auth0-angular';


const users : Usermodel[] = [{ id: 1, name: "John Doe", username:"user1", email: "user1@gmail.com"},
{ id: 2, name: "Chris Hazel", username:"user2", email: "user2@gmail.com"},
{ id: 3, name: "Mike Angle", username:"user3", email: "user3@gmail.com"},
{ id: 4, name: "Hifumi Nozaki", username:"user4", email: "user4@gmail.com"},
{ id: 5, name: "Bernadette Bacara", username:"user5", email: "user5@gmail.com"}]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kwik-Koder';

  User: any = [];

  constructor(private userserv : UserService, public auth: AuthService){
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

  
}
