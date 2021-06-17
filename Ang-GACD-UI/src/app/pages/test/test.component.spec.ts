import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TestComponent } from './test.component';
import { RestService } from 'src/Services/rest.service';
import { Usermodel } from 'src/Models/UserModel';
import {UserService} from 'src/Services/User.service';
import { ComponentFixtureAutoDetect }  from '@angular/core/testing';
import { LangSelectComponent } from 'src/app/components/lang-select/lang-select.component';
import { Language } from 'src/Models/LanguageEnum';
import {Router} from "@angular/router";
//import { Interface } from 'readline';
import { templateJitUrl } from '@angular/compiler';
describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let testString: string;
  let inputString: string;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
