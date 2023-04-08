import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Shweet Recipe Bro!',
      'Yo this is delicious man!',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ31w3dz0G9nrRi8uiZrF9OmaeEXeikHtCCuw&usqp=CAU'
    ),
    new Recipe(
      'Shweet Recipe Bro!',
      'Yo this is delicious man!',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ31w3dz0G9nrRi8uiZrF9OmaeEXeikHtCCuw&usqp=CAU'
    ),
  ];

  constructor() {}
}
