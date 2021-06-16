import { I18NHtmlParser } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayTime'
})
export class DisplayTimePipe implements PipeTransform {

  transform(value: number): string {
    return this.dhm(value);
  }

  dhm(ms: number): string{
    let days = Math.floor(ms / (24*60*60*1000));
    let daysms=ms % (24*60*60*1000);
    let hours = Math.floor((daysms)/(60*60*1000));
    let hoursms=ms % (60*60*1000);
    let minutes = Math.floor((hoursms)/(60*1000));
    let minutesms=ms % (60*1000);
    let sec = Math.floor((minutesms)/(1000));
    return "Days:"+days+" Hours:"+hours+" Minutes:"+minutes+" Seconds:"+sec;
  }

}
