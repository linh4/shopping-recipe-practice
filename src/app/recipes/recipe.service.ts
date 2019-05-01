import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Curry',
      'Japanese tasty chicken curry',
      'https://www.justonecookbook.com/wp-content/uploads/2013/03/Simple-Chicken-Curry.jpg',
      [
        new Ingredient('Chicken', 2),
        new Ingredient('Carrot', 3)
      ]),
    new Recipe(
      'Eggplant Parmesan',
      'Perfect Italian Night',
      'https://www.simplyrecipes.com/wp-content/uploads/2014/08/eggplant-parmesan-horiz-b-2000.jpg',
      [
        new Ingredient('Eggplant', 1),
        new Ingredient('Parmesan', 4)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
