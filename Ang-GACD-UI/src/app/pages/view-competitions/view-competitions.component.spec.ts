import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestService } from 'src/Services/rest.service';

import { ViewCompetitionsComponent } from './view-competitions.component';

describe('ViewCompetitionsComponent', () => {

  class MockRestService
  {
    getCompetitions(): Promise<any>{
      return new Promise<void>((resolve,reject)=> {});
    }
    //put api calls here if you want to test them
  }
  let component: ViewCompetitionsComponent;
  let fixture: ComponentFixture<ViewCompetitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCompetitionsComponent ],
      providers: [        
        {provide: RestService, useClass: MockRestService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
