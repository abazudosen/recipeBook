import { Ingredient } from '../ingredient';

export class Recipe {
  // tslint:disable-next-line:one-line
  constructor(public name: string, public desc: string, public imagePath: string, public ingredients: Ingredient[]){

  }
}
