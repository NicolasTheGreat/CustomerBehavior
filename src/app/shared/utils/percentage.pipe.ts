import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return (value * 100).toFixed(0);
  }

}
