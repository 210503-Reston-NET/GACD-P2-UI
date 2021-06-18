import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BetInputModel } from 'src/Models/BetInputModel';
import { RestService } from 'src/Services/rest.service';

import { CompetitionResultComponent } from './competition-result.component';

describe('CompetitionResultComponent', () => {
  class MockRestService
  {
    getCompetitionResults(): Promise<any>{
      return new Promise<void>((resolve,reject)=> {});
    }
    //put api calls here if you want to test them
  }

  let component: CompetitionResultComponent;
  let fixture: ComponentFixture<CompetitionResultComponent>;
  let router: Router;
  let rest: RestService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionResultComponent ],
      providers: [        
        {provide: ActivatedRoute ,useValue: {id: 0}},
        {provide: RestService, useClass: MockRestService},
        {provide: ActivatedRoute,useValue: {id: 0}},
                
      ],
      imports: [
        RouterTestingModule,
      ]
    })
    .compileComponents();
    router = TestBed.inject(Router);
    rest = TestBed.inject(RestService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionResultComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should place bet', () =>{
    let spy = spyOn(component, 'TakeTest');
    component.TakeTest();
    expect(spy).toHaveBeenCalled();
  });

});
