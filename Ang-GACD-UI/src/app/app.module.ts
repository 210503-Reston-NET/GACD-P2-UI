import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from "../Services/User.service";
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { LoginButtonComponent } from './components/nav-buttons/login-button/login-button.component';
import { SignupButtonComponent } from './components/nav-buttons/signup-button/signup-button.component';
import { LogoutButtonComponent } from './components/nav-buttons/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/nav-buttons/authentication-button/authentication-button.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    LoginButtonComponent,
    SignupButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    NavBarComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
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
