import { Recipe } from "./recipe-model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient-model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

// Used to inject Service into another Service
// Here, we are injecting ShoppingList service into RecipeService
@Injectable() 
export class RecipeService {
    private recipesArr: Recipe[] = [
        new Recipe("Test Recipe - A", 
            "Test Recipe - A Desciption",
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
            [
                new Ingredient('Smileys', 10),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe("Test Recipe - B ",
            " Test Recipe - B Desciption",
            "assets/images/Recipe_Logo.png",
            [
                new Ingredient('Buns', 1),
                new Ingredient('Patato Wafers', 10)
            ])
    ];

    public recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService) { }

    public getRecipes() {
        return this.recipesArr.slice(); // Slice method will return a copy of the actual Array
    }

    public addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredientsToShoppingList(ingredients);
    }
}