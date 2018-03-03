import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { UtilsService, PasswordValidation } from '../../core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, private utils: UtilsService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.changePasswordForm = new FormGroup({
      'oldPassword': new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      'newPassword': new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      'confirmNewPassword': new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    }, { updateOn: 'blur', validators: [PasswordValidation.MatchPassword] });
  }

  get oldPassword() {
    return this.changePasswordForm.get('oldPassword');
  }

  get newPassword() {
    return this.changePasswordForm.get('newPassword');
  }

  get confirmNewPassword() {
    return this.changePasswordForm.get('confirmNewPassword');
  }

  getErrorMessage(key) {
    return this.utils.getErrorMessage(key);
  }

  onSubmit() {
    console.log(this.changePasswordForm.value);
  }

}
