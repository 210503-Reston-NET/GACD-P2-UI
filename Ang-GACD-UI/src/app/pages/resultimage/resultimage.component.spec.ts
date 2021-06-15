import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultimageComponent } from './resultimage.component';

describe('ResultimageComponent', () => {
  let component: ResultimageComponent;
  let fixture: ComponentFixture<ResultimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
