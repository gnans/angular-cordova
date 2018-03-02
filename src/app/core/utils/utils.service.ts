import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  public isEmpty(obj): boolean {
    return (obj && (Object.keys(obj).length === 0));
  }
}
