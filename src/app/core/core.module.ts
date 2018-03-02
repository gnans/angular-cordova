import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CordovaService } from './cordova/cordova.service';
import { DeviceService } from './device/device.service';
import { UtilsService } from './utils/utils.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [CordovaService, DeviceService, UtilsService]
})
export class CoreModule { }
