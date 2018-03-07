import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','http://media.immediate.co.uk/volatile/sites/2/2018/01/OLI0218-Healthy-MonsterSalad_020309-89240d9.jpg?quality=45&resize=556,723'),
    new Recipe('Another Recipe','This is simply a test','http://media.immediate.co.uk/volatile/sites/2/2018/01/OLI0218-Healthy-MonsterSalad_020309-89240d9.jpg?quality=45&resize=556,723')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
