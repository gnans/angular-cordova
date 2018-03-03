import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CordovaService } from './cordova.service';
import 'rxjs/add/operator/map';

declare var device: any;

@Injectable()
export class DeviceService {
  platform: Observable<any>;

  constructor(private cdv: CordovaService) {
    this.platform = this.cdv.deviceReady.map(() => device.platform);
  }

}
