import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipe'
})
export class MiPipePipe implements PipeTransform {

  transform(value: string):string{
    return value.toUpperCase() || '';
  }

}
