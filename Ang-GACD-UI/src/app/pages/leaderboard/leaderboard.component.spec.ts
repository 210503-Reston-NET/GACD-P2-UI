import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestService } from 'src/Services/rest.service';

import { LeaderboardComponent } from './leaderboard.component';

describe('LeaderboardComponent', () => {
  let component: LeaderboardComponent;
  let fixture: ComponentFixture<LeaderboardComponent>;

  class MockRestService
  {
    //put api calls here if you want to test them
    getLeaderBoardByCatagoryId(): Promise<any>{
      return new Promise<void>((resolve,reject)=> {});
    } 
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderboardComponent ],
      providers: [
        {provide: RestService, useClass: MockRestService},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
