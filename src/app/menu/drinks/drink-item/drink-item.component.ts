import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from '../../menu-item.model';

@Component({
  selector: 'app-drink-item',
  templateUrl: './drink-item.component.html',
  styleUrls: ['./drink-item.component.css']
})
export class DrinkItemComponent implements OnInit {
  @Input() currentMenuItem: MenuItem;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
