import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from '../../menu-item.model';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  @Input() currentMenuItem: MenuItem;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
