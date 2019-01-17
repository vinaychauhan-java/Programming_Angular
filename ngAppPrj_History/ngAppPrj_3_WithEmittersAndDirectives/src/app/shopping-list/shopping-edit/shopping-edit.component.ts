import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
// import { Ingredient } from 'src/app/shared/ingredient-model';
import { Ingredient } from '../../shared/ingredient-model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  // Type will be a JavaScript object with two properties.
  // Name and amount where the first property name is a string and the second one is a number
  // ingredientAdded = new EventEmitter<{ name: string, amount: number }>();

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {

  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
