import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraDirective } from './camera/camera.directive';
import { DeviceService } from './device/device.service';
import { CordovaService } from './cordova/cordova.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CameraDirective
  ],
  providers: [
    DeviceService
  ],
  exports: [
    CameraDirective,
    DeviceService,
    CordovaService
  ]
})
export class CordovaModule { }
