import {Component, HostListener, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

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
  leftIcon: string;

  constructor() { }

  ngOnInit() {
    const width = window.innerWidth;
    this.leftIcon = '/../../assets/pictures/header/DB_black.png';
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   const currentWidth = event.target.innerWidth;
  //   if (currentWidth < 720) {
  //     this.leftIcon = '/../../assets/pictures/header/DB_white.png';
  //   } else {
  //     this.leftIcon = '/../../assets/pictures/header/DB_black.png';
  //   }
  // }

  // @HostListener('scroll', ['$event']) // for scroll events of the current element
  // @HostListener('window:scroll', ['$event']) // for window scroll events
  // onScroll(event) {
  //   if (this.leftIcon === '/../../assets/pictures/header/DB_white.png') {
  //     this.leftIcon = '/../../assets/pictures/header/DB_black.png';
  //     this.scrolled = true;
  //   }
  // }
}
