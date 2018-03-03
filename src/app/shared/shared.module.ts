import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { routing } from './shared.routing';

import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import { ForgotPasswordComponent } from './_components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './_components/change-password/change-password.component';
import { AlertComponent } from './_components/alert/alert.component';
import { HomeComponent } from './_components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    routing,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    AlertComponent,
    HomeComponent
  ],
  exports: [
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    AlertComponent,
    HomeComponent
  ]
})
export class SharedModule { }
