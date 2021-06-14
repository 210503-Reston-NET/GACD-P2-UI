import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/pages/home/home.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { ApitestComponent } from './pages/apitest/apitest.component';
import { TestComponent } from 'src/app/pages/test/test.component';

import { AuthGuard } from '@auth0/auth0-angular';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { ViewCompetitionsComponent } from './pages/view-competitions/view-competitions.component';
import { CompetitionTestComponent } from './pages/competition-test/competition-test.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'apitest',
    component: ApitestComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'test',
    component: TestComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'leaderboard',
    component: LeaderboardComponent
  },
  {
    path: 'competitions',
    component: ViewCompetitionsComponent
  },
  { 
    path: 'product-details/:id',
    component: CompetitionTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
