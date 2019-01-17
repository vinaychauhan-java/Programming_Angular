import { Ingredient } from "../shared/ingredient-model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredientsArr: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 10)
    ];

    getIngredients() {
        return this.ingredientsArr.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredientsArr.push(ingredient);
        this.ingredientsChanged.emit(this.ingredientsArr.slice());
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.ingredientsArr.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredientsArr.slice());
    }
}