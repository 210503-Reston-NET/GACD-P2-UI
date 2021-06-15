import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionTestComponent } from './competition-test.component';

describe('CompetitionTestComponent', () => {
  let component: CompetitionTestComponent;
  let fixture: ComponentFixture<CompetitionTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
