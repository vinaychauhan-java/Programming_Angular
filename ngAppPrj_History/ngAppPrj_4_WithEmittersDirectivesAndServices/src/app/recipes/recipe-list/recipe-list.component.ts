import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-model';  // Navigated to One-Up Folder to have access for Model
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipesArr: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipesArr = this.recipeService.getRecipes();
  }

}
