import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-model';  // Navigated to One-Up Folder to have access for Model

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipesArr: Recipe[] = [
    new Recipe("Test Recipe - A ", " Test Recipe - A Desciption", "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"),
    new Recipe("Test Recipe - B ", " Test Recipe - B Desciption", "assets/images/Recipe_logo.jpg")    
  ];

  constructor() { }

  ngOnInit() {
  }

}
