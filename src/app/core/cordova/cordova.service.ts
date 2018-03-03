import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/publishReplay';
import { ConnectableObservable } from 'rxjs/observable/ConnectableObservable';

@Injectable()
export class CordovaService {
  deviceReady: Observable<any>;

  constructor() {
    this.deviceReady = Observable.fromEvent(document, 'deviceready').publishReplay(1);
    (this.deviceReady as ConnectableObservable<Event>).connect();
  }

  get isCordova(): boolean {
    return (window['cordova'] !== 'undefined');
  }

}
