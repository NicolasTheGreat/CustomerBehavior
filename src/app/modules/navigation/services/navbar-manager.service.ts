import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarManagerService {
  public navbarVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
