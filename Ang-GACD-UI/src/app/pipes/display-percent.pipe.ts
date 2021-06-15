import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayPercent'
})
export class DisplayPercentPipe implements PipeTransform {

  transform(value: number): number {
    return Math.floor(value * 100);
  }

}
