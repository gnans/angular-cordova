import { Directive, HostListener, Input, EventEmitter, Output } from '@angular/core';
import { CordovaService } from '../_services/cordova.service';

declare var navigator: any;

@Directive({
  selector: '[appCamera]'
})
export class CameraDirective {
  @Input() appCamera; // camera options
  @Output() onsuccess = new EventEmitter(); // success event
  @Output() onerror = new EventEmitter(); // failure event

  constructor(private cdv: CordovaService) { }

  @HostListener('click') onclick() {
    this.getPicture().then((res) => {
      this.onsuccess.emit(res);
    }).catch((err) => {
      this.onerror.emit(err);
    });
  }

  getPicture() {
    return new Promise((resolve, reject) => {
      if (this.cdv.isCordova) {
        this.cdv.deviceReady.subscribe(() => {
          navigator.camera.getPicture(
            (res) => resolve(res),
            (err) => reject(err),
            this.appCamera);
        });
      } else {
        return reject('Device not supported');
      }
    });

  }

}
