import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredientsArr: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredientsArr = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (newIngredientsArr: Ingredient[]) => {
        this.ingredientsArr = newIngredientsArr;
      }
    );
  }

}