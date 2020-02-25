import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-line-form',
  templateUrl: './drop-line-form.component.html',
  styleUrls: ['./drop-line-form.component.css']
})
export class DropLineFormComponent implements OnInit {
  enteredName = 'Name';
  enteredEmail = 'Email';
  enteredMessage = 'Your Message';

  constructor() { }

  ngOnInit() {
  }

}
