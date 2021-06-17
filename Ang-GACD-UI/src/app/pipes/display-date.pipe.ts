import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayDate'
})
export class DisplayDatePipe implements PipeTransform {

  transform(value: number): string {
    let date = new Date(value);
    //return  date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    //+" "+date.toDateString();
    // date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    date = new Date(date.getTime() - date.getTimezoneOffset()*60*1000);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    var m = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + m + ' ' + ampm;
    return (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
    
    //return newDate.toString();
   // return date.toString()

  }

}
