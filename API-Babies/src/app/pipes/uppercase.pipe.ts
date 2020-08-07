import { Pipe, PipeTransform } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {

  transform(phrase:string): SafeHtml {

    let list: Array<string> = ["&#128526;", "&#128053;", "&#128056;", "&#128048;", "&#128060;", "&#128050;"];
    let randy = Math.floor(Math.random() * Math.floor(6));

    // return `<h3> ${phrase} &#128526; </h3> `;
    return `<h3> ${phrase} ${list[randy]}; </h3> `;
  }

}
