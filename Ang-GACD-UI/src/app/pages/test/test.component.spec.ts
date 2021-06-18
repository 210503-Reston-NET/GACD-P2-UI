import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TestComponent } from './test.component';
import { AuthModule, AuthService } from '@auth0/auth0-angular';
import { environment as env } from '../../../environments/environment';
import { RestService } from 'src/Services/rest.service';
import { ActivatedRoute, Router, ɵangular_packages_router_router_o } from '@angular/router';
import { Observable } from 'rxjs';
import { DisplayCategoryPipe } from '../../pipes/display-category.pipe';
import { Pipe, PipeTransform } from '@angular/core';
//import { Interface } from 'readline';
import { templateJitUrl } from '@angular/compiler';
describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
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
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent, MockPipe ],
      providers: [
        {provide: AuthService, useClass: MockAuthService},
        {provide: RestService, useClass: MockRestService},
        {provide: ActivatedRoute,useValue: {id: 0}},
        {provide: DisplayCategoryPipe, useClass: MockPipe},
        
        ],
        imports: [
          RouterTestingModule
        ]      
    })
    .compileComponents();
    auth = TestBed.inject(AuthService)
    rest = TestBed.inject(RestService)
    router = TestBed.inject(Router)
    dcp = TestBed.inject(DisplayCategoryPipe)
  });

  //beforeEach(() => {
    //fixture = TestBed.createComponent(TestComponent);
    //component = fixture.componentInstance;
    //fixture.detectChanges();
 // });

  it('should create', () => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});
