import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UtilsService } from '../../../core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, private utils: UtilsService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.forgotPasswordForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.email,
      ])
    }, { updateOn: 'blur' });
  }

  get email() {
    return this.forgotPasswordForm.get('email');
  }

  getErrorMessage(key) {
    return this.utils.getErrorMessage(key);
  }

  onSubmit() {
    console.log(this.forgotPasswordForm.value);
  }

}
