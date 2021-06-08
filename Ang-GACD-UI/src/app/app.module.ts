import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from "../Services/User.service";
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from '@auth0/auth0-angular';
import { FormsModule } from '@angular/forms'
import { environment as env } from '../environments/environment';
import { LoginButtonComponent } from './components/nav-buttons/login-button/login-button.component';
import { SignupButtonComponent } from './components/nav-buttons/signup-button/signup-button.component';
import { LogoutButtonComponent } from './components/nav-buttons/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/nav-buttons/authentication-button/authentication-button.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginButtonComponent,
    SignupButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    NavBarComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: env.auth.domain,
      clientId: env.auth.clientId
    })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
