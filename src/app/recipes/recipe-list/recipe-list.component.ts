import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test-1', 'desc for test', 'https://downshiftology.com/wp-content/uploads/2018/10/Deviled-Eggs-Recipe.jpg'),
    new Recipe('Test-2', 'desc for test', 'https://downshiftology.com/wp-content/uploads/2018/10/Deviled-Eggs-Recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
