
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'empFilter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.dob.toLocaleLowerCase().includes(args) || val.name.toLocaleLowerCase().includes(args) || val.email.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}