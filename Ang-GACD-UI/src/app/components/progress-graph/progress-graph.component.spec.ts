import { ComponentFixture, TestBed } from '@angular/core/testing';
import { rejects } from 'assert';
import { RestService } from 'src/Services/rest.service';
import { resolve } from 'url';

import { ProgressGraphComponent } from './progress-graph.component';

describe('ProgressGraphComponent', () => {
  let component: ProgressGraphComponent;
  let fixture: ComponentFixture<ProgressGraphComponent>;
  let rest: RestService;

  class MockRestService
  {
    getProgressResults(): Promise<any>{
      return new Promise<void>((resolve,reject)=> {});
    }

    
    //put api calls here if you want to test them
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressGraphComponent ],

      providers: [
        {provide: RestService, useClass: MockRestService}
      ]
    })
    .compileComponents();
    rest = TestBed.inject(RestService)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
