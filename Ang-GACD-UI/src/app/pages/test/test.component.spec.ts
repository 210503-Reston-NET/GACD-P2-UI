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
import { ResultModel } from 'src/Models/ResultModel';
//import { Interface } from 'readline';
import { ResourceLoader, templateJitUrl } from '@angular/compiler';
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
    postTestResults(){};
  }


  @Pipe({name: 'displayCategory'})
  class MockPipe implements PipeTransform {
      transform(value: number): number {
          //Do stuff here, if you want
          return value;
      }
    
}
  interface MockResult {
    image : string;
    text : string;
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
  it('testWPM', () => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    
    let chars = 250
    let time = 60000
    let wpm = component.wordsPerMinute(chars, time);
    expect(wpm).toBe(50);
  });
  it('testSlowResult', () => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    component.state = {
      words: '',
      wordarray: new Array(),
      typedarray: new Array(),
      enteredText: '',
      errors: 0,
      started: false,
      startTime: null,
      timeTaken: 0,
      letterPosition: 0,
      //wordPosition: 0,
      finished: false,
      correctchars: 0
    }
    component.result = {
      image: "",
      text: ""
    }
    component.category = 1;
    component.state.correctchars = 100;
    component.state.errors = 0;    
    component.timeTaken = 60000;
    component.wpm = 20;
    component.submitResults();
    expect(component.result.text).toBe("Keep working at typing!");
  });
  it('testAverageResult', () => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    component.state = {
      words: '',
      wordarray: new Array(),
      typedarray: new Array(),
      enteredText: '',
      errors: 0,
      started: false,
      startTime: null,
      timeTaken: 0,
      letterPosition: 0,
      //wordPosition: 0,
      finished: false,
      correctchars: 0
    }
    component.result = {
      image: "",
      text: ""
    }
    component.category = 1;
    component.state.correctchars = 200;
    component.state.errors = 0;    
    component.timeTaken = 60000;
    component.wpm = 40;
    component.submitResults();
    expect(component.result.text).toBe("You're improving!");
  });
  it('testAverageResult', () => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    component.state = {
      words: '',
      wordarray: new Array(),
      typedarray: new Array(),
      enteredText: '',
      errors: 0,
      started: false,
      startTime: null,
      timeTaken: 0,
      letterPosition: 0,
      //wordPosition: 0,
      finished: false,
      correctchars: 0
    }
    component.result = {
      image: "",
      text: ""
    }
    component.category = 1;
    component.state.correctchars = 400;
    component.state.errors = 0;    
    component.timeTaken = 60000;
    component.wpm = 80;
    component.submitResults();
    expect(component.result.text).toBe("You're a programming genius!");
  });
});
