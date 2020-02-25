import {Component, HostListener, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  menuState = 'out';
  navbarOpen = false;
  leftIcon = '/../../assets/pictures/header/DB_white.png';
  rightIcon = '/../../assets/pictures/header/header_white.png';

  constructor() { }

  ngOnInit() {

  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.leftIcon = '/../../assets/pictures/header/DB_black.png';
    this.rightIcon = '/../../assets/pictures/header/HEADER_black.png';
  }
}
