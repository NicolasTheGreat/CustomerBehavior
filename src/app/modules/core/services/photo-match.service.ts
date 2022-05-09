import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoMatchService {

  constructor() {
  }

  public getPhoto(age: number): string {
    console.log(age);
    return 'assets/men-photo.webp';
  }
}
