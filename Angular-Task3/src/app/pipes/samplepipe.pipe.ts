import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'samplepipe'
})
export class SamplepipePipe implements PipeTransform {

  transform(user: string): unknown {
    return `Have a nice day ${user} :)`;
  }

}
