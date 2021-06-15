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
import { LoadingComponent } from './components/loading/loading.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { ApitestComponent } from './pages/apitest/apitest.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { TestComponent } from './pages/test/test.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { ViewCompetitionsComponent } from './pages/view-competitions/view-competitions.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LangSelectComponent } from './components/lang-select/lang-select.component';
import { ResultimageComponent } from './pages/resultimage/resultimage.component';
import { CompetitionTestComponent } from './pages/competition-test/competition-test.component';
import { CreateCompetitionComponent } from './create-competition/create-competition.component';
import { DisplayPercentPipe } from './pipes/display-percent.pipe';
import { DisplayDatePipe } from './pipes/display-date.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs'; 

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
    HomeComponent,
    ApitestComponent,
    TestComponent,
    LeaderboardComponent,
    ViewCompetitionsComponent,
    LangSelectComponent,
    ResultimageComponent,
    CompetitionTestComponent,
    CreateCompetitionComponent,
    DisplayPercentPipe,
    DisplayDatePipe
  ],
  imports: [
    NgbModule,
    HttpClientModule,
    MatTabsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: env.auth.domain,
      clientId: env.auth.clientId,
      audience: env.auth.audience,
      scope: 'read:current_user',
      httpInterceptor:{
        allowedList:[
          //`${env.dev.serverUrl}api/test/CodeSnippet/Secret`,
            {
              // Match any request that starts 'https://kwikkoder.us.auth0.com/api/v2/' (note the asterisk)
              uri: `${env.dev.serverUrl}api/TypeTest*`,
              tokenOptions: {
                // The attached token should target this audience
                audience: env.auth.audience,
                // The attached token should have these scopes
                scope: 'read:current_user',
                //Authorization: `Bearer ${ this.userToken }`
              }
            },
            {
              // Match any request that starts 'https://kwikkoder.us.auth0.com/api/v2/' (note the asterisk)
              uri: `${env.dev.serverUrl}api/User/username`,
              tokenOptions: {
                // The attached token should target this audience
                audience: env.auth.audience,
                // The attached token should have these scopes
                scope: 'read:current_user',
                //Authorization: `Bearer ${ this.userToken }`
              }
            },
            {
              // Match any request that starts 'https://kwikkoder.us.auth0.com/api/v2/' (note the asterisk)
              uri: `${env.dev.serverUrl}api/Competition`,
              httpMethod: "POST",
              tokenOptions: {
                // The attached token should target this audience
                audience: env.auth.audience,
                // The attached token should have these scopes
                scope: 'read:current_user',
                //Authorization: `Bearer ${ this.userToken }`
              }
            },
            {
              // Match any request that starts 'https://kwikkoder.us.auth0.com/api/v2/' (note the asterisk)
              uri: `${env.dev.serverUrl}api/UserStat/*`,
              tokenOptions: {
                // The attached token should target this audience
                audience: env.auth.audience,
                // The attached token should have these scopes
                scope: 'read:current_user',
                //Authorization: `Bearer ${ this.userToken }`
              }
            },

        ]
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthHttpInterceptor,
        multi: true,
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
