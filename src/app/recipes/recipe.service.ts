import { EventEmitter } from '@angular/core';
import { Recipe } from '../shared/recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test-1', 'desc for test', 'https://downshiftology.com/wp-content/uploads/2018/10/Deviled-Eggs-Recipe.jpg'),
    new Recipe('Test-2', 'desc for test', 'https://downshiftology.com/wp-content/uploads/2018/10/Deviled-Eggs-Recipe.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
