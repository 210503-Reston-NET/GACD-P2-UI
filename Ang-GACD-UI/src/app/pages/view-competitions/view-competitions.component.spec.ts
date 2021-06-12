import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCompetitionsComponent } from './view-competitions.component';

describe('ViewCompetitionsComponent', () => {
  let component: ViewCompetitionsComponent;
  let fixture: ComponentFixture<ViewCompetitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCompetitionsComponent ]
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
