import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraDirective } from './_directives/camera.directive';
import { DeviceService } from './_services/device.service';
import { CordovaService } from './_services/cordova.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CameraDirective
  ],
  providers: [
    DeviceService,
    CordovaService
  ],
  exports: [
    CameraDirective
  ]
})
export class CordovaModule { }
