import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  loginEvent:EventEmitter<void> = new EventEmitter<void>();
  registerEvent:EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  triggerLoginEvent(){
    this.loginEvent.emit()
  }

  triggerRegisterEvent(){
    this.registerEvent.emit()
  }

  

}
