import {Component, Inject, Injectable} from '@angular/core';
import {MatSnackBar, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

/**
 * @title Basic snack-bar
 */
@Injectable(
  {
    providedIn:'root'
  }
)
@Component({
  selector: 'snack-bar',
  templateUrl: 'snack-bar.component.html',
  styleUrls: ['snack-bar.component.css']
})
export class SnackBarComponent {
  constructor(private _snackBar: MatSnackBar) {}

  displaySuccess(message: string) {
    this._snackBar.openFromComponent(successComponent,{ data: message, duration: 3000 });
  }

  displayError(message: string) {
    this._snackBar.openFromComponent(errorComponent,{ data: message, duration: 3000 });
  }
}


@Component({
  selector: 'error-component',
  template: `<span>Error: {{data}}</span>`,
  styles: ['span {color: red;}']
})
export class errorComponent{
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string){}
}

@Component({
  selector: 'success-component',
  template: `<span>{{data}}</span>`,
  styles: ['span {color: green;}']
})
export class successComponent{
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string){}
}