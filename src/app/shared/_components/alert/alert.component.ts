import { Component, OnInit } from '@angular/core';

import { AlertService } from '@app/core';

@Component({
  selector: 'app-alert',
  styleUrls: ['./alert.component.scss'],
  templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit {
  message: any;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => { this.message = message; });
  }
}
