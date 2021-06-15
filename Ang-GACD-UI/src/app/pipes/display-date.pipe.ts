import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayDate'
})
export class DisplayDatePipe implements PipeTransform {

  transform(value: number): string {
    let date = new Date(value);
    return  date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    +" "+date.toDateString();
  }

}
