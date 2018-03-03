import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class UtilsService {

  constructor() { }

  public isEmpty(obj): boolean {
    return (obj && (Object.keys(obj).length === 0));
  }

  public getErrorMessage(key: FormControl): string {
    let mes = '';

    if (key.hasError('required')) {
      mes = 'You must enter a value';
    } else if (key.hasError('email')) {
      mes = 'Not a valid email';
    } else if (key.hasError('minlength')) {
      mes = `Should contain atleast ${key.errors['minlength']['requiredLength']} letters`;
    } else if (key.hasError('matchPassword')) {
      mes = `Password not match`;
    }

    return mes;
  }
}
