import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatSnackBar, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

import { SnackBarComponent } from './snack-bar.component';

describe('SnackBarComponent', () => {
  let component: SnackBarComponent;
  let fixture: ComponentFixture<SnackBarComponent>;
  let snack: MatSnackBar;

  class MockMatSnack {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackBarComponent ],
      providers: [        
        {provide: MatSnackBar, useClass: MockMatSnack}
      ]
    })
    .compileComponents();

    

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
