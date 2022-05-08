import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'markerOffset'
})
export class MarkerOffsetPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return `${value * 0.67}%`;
  }

}