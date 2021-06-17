import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompModel } from 'src/Models/CompModel';

import { CreateCompetitionComponent } from './create-competition.component';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { RestService } from 'src/Services/rest.service';
import { UserNameModel } from 'src/Models/UserNameModel';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { LangSelectComponent } from 'src/app/components/lang-select/lang-select.component';
import { SnackBarComponent } from '../components/snack-bar/snack-bar.component';
import { DatePipe } from '@angular/common';
describe('CreateCompetitionComponent', () => {
  let component: CreateCompetitionComponent;
  let fixture: ComponentFixture<CreateCompetitionComponent>;
  let newComp: CompModel;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCompetitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create model', () => {
    expect(newComp).toBeTruthy();
  })
});
