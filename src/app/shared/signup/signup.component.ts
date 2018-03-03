import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UtilsService } from '../../core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, private utils: UtilsService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.signupForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    }, { updateOn: 'blur' });
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  getErrorMessage(key) {
    return this.utils.getErrorMessage(key);
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
