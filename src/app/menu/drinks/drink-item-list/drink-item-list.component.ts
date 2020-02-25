import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../../menu-item.model';
import {MenuService} from '../../menu.service';

@Component({
  selector: 'app-drink-item-list',
  templateUrl: './drink-item-list.component.html',
  styleUrls: ['./drink-item-list.component.css']
})
export class DrinkItemListComponent implements OnInit {
  drinkItems: MenuItem[] ;
  orderedItems = [];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.drinkItems = this.menuService.getDrinkItems();
    this.setNumberOfItemsPerRow(2);
  }

  private setNumberOfItemsPerRow( k: number) {
    for (let i = 0; i < this.drinkItems.length; i += k) {
      this.orderedItems.push({ items: this.drinkItems.slice(i, i + k) });
    }
  }

}
