import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraDirective } from './camera.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CameraDirective],
  exports: [
    CameraDirective
  ]
})
export class CameraModule { }
