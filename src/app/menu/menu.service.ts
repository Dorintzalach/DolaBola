import { Injectable } from '@angular/core';
import {MenuItem} from './menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private foodItems: MenuItem[];
  private drinkItems: MenuItem[];

  constructor() {
    this.foodItems = [
      {name: 'Rice Popper', description: 'Have yourself an arancini ball-with red rice,chili vegetables and irresistible dipping sauce', price: 56},
      {name: 'Popcorn  Nuggets', description: 'Cornflake-coated crispy pieces of seasoned non-GMO soy, ancient grains and veggies', price: 48},
      {name: 'Beyond Beet Burger', description: 'Burger topped with pickles, tomato, lettuce, and a creamy cashew sauce on wheat bun', price: 70},
      {name: 'Cheese Fries', description: 'Classic fries topped with chipotle \'cheese\' sauce, vegan parm and green onions', price: 42},
      {name: 'Lebanese', description: 'Roasted kale with sautéed zucchini and broccoli, served atop warm quinoa with', price: 70},
      {name: 'House Salad', description: 'Mixed greens, cucumber, carrots, cherry tomatoes, raosted veggies and pickled', price: 50},
      {name: 'Curry Wrap', description: 'Genmai rice, Japanese curry sauce, smokey tofu, baby spinach and pico de gallo are topped', price: 64},
      {name: 'Japanese Curry', description: 'A rich, umami curry with a medley of heart warming harvest vegetables', price: 64},
      {name: 'Crispy Chicken', description: 'Crispy chicken with lettuce, tomato, pickles, kinpira, veganaise and popper sauce', price: 70},
      {name: 'Stuffed Mushrooms', description: 'Baked brown mushrooms stuffed with mozzarella cheese and creamy cashew sauce', price: 56},
    ];
    this.drinkItems = [
      {name: 'Dola Bola', description: ' Broker\'s Gin, St. Germain, Lime, Nettles. Stings', price: 47},
      {name: 'Smokey', description: 'Woodford Reserve Whiskey, Maple Syrup, Dilution, Jerry Thomas Bitters', price: 50},
      {name: 'Rum Punch', description: 'Appleton Estate Rum, Grand Marnier, Bristol Syrup Watermelon, Lime, Pineapple', price: 50},
      {name: 'Chocolate Orange', description: 'Woodford Whiskey, Martell Brandy, Cointreau. Chocolate. Orange Glass', price: 47},
      {name: 'Micro Milk', description: 'Ketel One Vodka, Briottet White Cacao, Bristol Syrup Vanilla, White Choc Foam. Mini \'99', price: 50},
      {name: 'Mint It', description: 'First Absolut Raspberry Vodka, Citrus. Second Briottet Mint And Chocolate ', price: 53},
      {name: 'Goldish', description: 'Ketel One Vodka, Briottet Peach, Cranberry, Citrus, Gold', price: 45},
      {name: 'Color Line', description: 'Chase Pink Grapefruit Gin. Fresh Pink Grapefruit, Fizz. British Summer', price: 64},
      {name: 'Honey Bunny', description: 'Bacardi Carta Blanca Rum, Velvet Falernum, Cinnamon, Chai, Clarified Milk', price: 57},
      {name: 'Crack Pie', description: 'Tanqueray Gin, Citrus & Vanilla, brown suger', price: 56},
    ];
  }

  getFoodItems(): MenuItem[] {
    return this.foodItems.slice();
  }

  getDrinkItems(): MenuItem[] {
    return this.drinkItems.slice();
  }
}
