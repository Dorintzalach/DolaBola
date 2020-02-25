import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../../menu-item.model';
import {MenuService} from '../../menu.service';

@Component({
  selector: 'app-food-item-list',
  templateUrl: './food-item-list.component.html',
  styleUrls: ['./food-item-list.component.css']
})
export class FoodItemListComponent implements OnInit {
  foodItems: MenuItem[] ;
  orderedItems = [];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.foodItems = this.menuService.getFoodItems();
    this.setNumberOfItemsPerRow(2);
  }

  private setNumberOfItemsPerRow( k: number) {
    for (let i = 0; i < this.foodItems.length; i += k) {
      this.orderedItems.push({ items: this.foodItems.slice(i, i + k) });
    }
  }
}
