import { Component, OnInit } from '@angular/core';
import {AboutService} from './about.service';

@Component({
  selector: 'app-drop-line-form',
  templateUrl: './drop-line-form.component.html',
  styleUrls: ['./drop-line-form.component.css']
})
export class DropLineFormComponent implements OnInit {
  enteredName = '';
  enteredEmail = '';
  enteredMessage = '';
  observer$ = this.aboutService.sendEmailAnswer$;


  constructor(private aboutService: AboutService) { }

  ngOnInit() {
  }

  sendMessage() {
    const message = {
      email: this.enteredEmail,
      messageContent: this.enteredMessage,
      from: this.enteredName
    };
    console.log(message);
    this.aboutService.sendEmail(message);
    this.observer$.subscribe(res => {
      if (res) {
        this.enteredName = 'Name';
        this.enteredEmail = 'Email';
        this.enteredMessage = 'Your Message';
      }
    });
  }
}
