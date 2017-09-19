import { Injectable, EventEmitter } from '@angular/core';
import { Recipe} from './recipe';
import { Ingredient } from '../ingredient';
import {Response, HttpModule,  Http,  Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RecipeService {
   recipesChanges = new EventEmitter<Recipe[]>();

   private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Greens', 'Very Tasty', 'https://static1.squarespace.com/static/55c0d656e4b078be36ba8860/t/55db6994e4b0c02d897f4f12/1442071390597/282-Web.jpeg?format=1500w', [
      new Ingredient('french fries', 2),
      new Ingredient('pork meat', 1)
    // tslint:disable-next-line:max-line-length
    ] ), new Recipe('Avocados', 'Litle Salty', 'https://cdn.authoritynutrition.com/wp-content/uploads/2014/09/avocado-on-a-wooden-table.jpg', [] )
  ];

  constructor(private http: Http) { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData(){
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipebook-30a58.firebaseio.com/recipes.json', body, {headers: headers});
  }

  fetchData(){
    return this.http.get('https://recipebook-30a58.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanges.emit(this.getRecipes());
        }
      );
  }

}
