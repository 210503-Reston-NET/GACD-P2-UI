import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { TestComponent } from './pages/test/test.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { ViewCompetitionsComponent } from './pages/view-competitions/view-competitions.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LangSelectComponent } from './components/lang-select/lang-select.component';
import { CompetitionTestComponent } from './pages/competition-test/competition-test.component';
import { CreateCompetitionComponent } from './create-competition/create-competition.component';
import { DisplayPercentPipe } from './pipes/display-percent.pipe';
import { DisplayDatePipe } from './pipes/display-date.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { DisplayCategoryPipe } from './pipes/display-category.pipe'; 
import { CompetitionResultComponent } from './pages/competition-result/competition-result.component';
import { DisplayTimePipe } from './pipes/display-time.pipe';
import { ProgressGraphComponent } from './components/progress-graph/progress-graph.component'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DatePipe } from '@angular/common';




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
    TestComponent,
    LeaderboardComponent,
    ViewCompetitionsComponent,
    LangSelectComponent,
    CompetitionTestComponent,
    CreateCompetitionComponent,
    DisplayPercentPipe,
    DisplayDatePipe,
    SnackBarComponent,
    DisplayCategoryPipe,
    CompetitionResultComponent,
    DisplayTimePipe,
    ProgressGraphComponent,
  ],
  imports: [
    NgbModule,
    HttpClientModule,
    MatTabsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    FontAwesomeModule,
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
            {
              // Match any request that starts 'https://kwikkoder.us.auth0.com/api/v2/' (note the asterisk)
              uri: `${env.dev.serverUrl}api/CompetitonStats`,
              tokenOptions: {
                // The attached token should target this audience
                audience: env.auth.audience,
                // The attached token should have these scopes
                scope: 'read:current_user',
                //Authorization: `Bearer ${ this.userToken }`
              }
            },{
              uri: `${env.dev.serverUrl}api/Competition/bet`,
              httpMethod: "PUT",
              tokenOptions: {
                // The attached token should target this audience
                audience: env.auth.audience,
                // The attached token should have these scopes
                scope: 'read:current_user',
                //Authorization: `Bearer ${ this.userToken }`
              }
            },{
              // Match any request that starts 'https://kwikkoder.us.auth0.com/api/v2/' (note the asterisk)
              uri: `${env.dev.serverUrl}api/Competition/bet/*`,
              httpMethod: "PUT",
              tokenOptions: {
                // The attached token should target this audience
                audience: env.auth.audience,
                // The attached token should have these scopes
                scope: 'read:current_user',
                //Authorization: `Bearer ${ this.userToken }`
              }
            }
        ]
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [
    DatePipe,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthHttpInterceptor,
        multi: true,
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
