import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';



const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  // tslint:disable-next-line:no-use-before-declare
  {path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipeModule'},
  {path: 'shopping-list', component: ShoppingListComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
