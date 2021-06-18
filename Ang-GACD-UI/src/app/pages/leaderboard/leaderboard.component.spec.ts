import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestService } from 'src/Services/rest.service';
import { LeaderboardComponent } from './leaderboard.component';

describe('LeaderboardComponent', () => {
  let component: LeaderboardComponent;
  let fixture: ComponentFixture<LeaderboardComponent>;
  let service: RestService;
  class MockRestService
  {
    getLeaderBoardByCatagoryId(){};
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderboardComponent ],
      providers: [{provide: RestService, useClass: MockRestService}]
    })
    .compileComponents();
    service = TestBed.inject(RestService);
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
