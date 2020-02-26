import {Component, OnInit} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import {timer} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private readonly meta: Meta
  ) { }
  title = 'DolaBola';
  // menuState: any;

  ngOnInit(): void {
    timer(5000).subscribe(() => {
      this.meta.removeTag('name="viewport"');
      this.meta.addTag({ name: 'viewport', content: 'width=1000' });
    });
  }
}
