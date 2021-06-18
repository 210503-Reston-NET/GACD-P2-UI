import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { CompetitionTestComponent } from './competition-test.component';
import { AuthModule, AuthService } from '@auth0/auth0-angular';
import { environment as env } from '../../../environments/environment';
import { RestService } from 'src/Services/rest.service';
import { ActivatedRoute, Router, ɵangular_packages_router_router_o } from '@angular/router';
import { Observable } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { DisplayCategoryPipe } from '../../pipes/display-category.pipe';
import { Pipe, PipeTransform } from '@angular/core';



describe('CompetitionTestComponent', () => {
  let component: CompetitionTestComponent;
  let fixture: ComponentFixture<CompetitionTestComponent>;
  let auth: AuthService;
  let rest: RestService;
  let router: Router;
  let dcp: DisplayCategoryPipe;
  class MockAuthService {}
  class MockRestService
  {
    //put api calls here if you want to test them
  }
  

    @Pipe({name: 'displayCategory'})
    class MockPipe implements PipeTransform {
        transform(value: number): number {
            //Do stuff here, if you want
            return value;
        }
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionTestComponent, MockPipe],
      
      providers: [
      {provide: AuthService, useClass: MockAuthService},
      {provide: RestService, useClass: MockRestService},
      {provide: ActivatedRoute,useValue: {id: 0}},
      {provide: DisplayCategoryPipe, useClass: MockPipe},
      
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
    auth = TestBed.inject(AuthService)
    rest = TestBed.inject(RestService)
    router = TestBed.inject(Router)
    dcp = TestBed.inject(DisplayCategoryPipe)
   
  });
  
  it('should create', ()=>{
    fixture = TestBed.createComponent(CompetitionTestComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });


  
});

