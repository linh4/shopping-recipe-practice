import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test', 'desc for test', 'https://downshiftology.com/wp-content/uploads/2018/10/Deviled-Eggs-Recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
