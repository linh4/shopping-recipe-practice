import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams, HttpRequest }  from "@angular/common/http";
import { map } from 'rxjs/operators';

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class DataStorageServie {

  constructor(private httpClient: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    // const headers = new HttpHeaders().set('Authorization', 'blah blah');
    // return this.httpClient.put('https://ng-recipe-shopping-10e56.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
      // observe: 'body',
      // headers: headers
      // params: new HttpParams().set('auth', token)
    // });
    const req = new HttpRequest('PUT', 'https://ng-recipe-shopping-10e56.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {reportProgress: true}) //for upload or download something
    return this.httpClient.request(req);
  }

  getRecipes() {
    // this.httpClient.get<Recipe[]>('https://ng-recipe-shopping-10e56.firebaseio.com/recipes.json')
    this.httpClient.get<Recipe[]>('https://ng-recipe-shopping-10e56.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    })
      .pipe(map(recipes => {
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }))
      .subscribe(recipes => {
        this.recipeService.setRecipes(recipes);
      })
  }
}
