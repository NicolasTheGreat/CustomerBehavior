import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cash'
})
export class CashPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return (value / 77).toFixed(0);
  }

}
