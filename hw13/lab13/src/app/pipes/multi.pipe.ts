import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "multi", pure: false
})
export class MultiPipe implements PipeTransform {

  transform(value: string, args?: number): string {
    let s="";
    for(let i=0; i<args; i++){
      s+=value+" ";
    }
    return s.trim();
  }
}
