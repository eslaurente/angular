
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

import { Recipe } from 'app/shared/recipe.model';
import { RecipeService } from "app/services/recipe.service";
import { RecipeDetails } from "app/shared/recipe-details.model";
import { AuthService } from "app/services/auth.service";

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) { }

  storeRecipes(): Observable<Response> {
    const token = this.authService.getToken();
    return this.http.put('https://udemy-ng-recipe-book-a5dc3.firebaseio.com/recipes.json', this.recipeService.getRecipes(), { params: { 'auth': token }})
      .catch((error: Response) => {
        return Observable.throw(error);
      });
  }

  fetchRecipes(): Observable<Recipe[]> {
    const token = this.authService.getToken();
    
    return this.http.get('https://udemy-ng-recipe-book-a5dc3.firebaseio.com/recipes.json', { params: { 'auth': token }})
      .map((response: Response) => {
        const data: Recipe[] =  (<Recipe[]>response.json());
        const recipeList: Recipe[] = [];
        data.forEach((item) => {
          recipeList.push(new Recipe(item.name, item.description, item.imagePath, item.details, item.id));
        });
        console.log(recipeList);
        
        return recipeList;
      })
      .catch((error: any) => {
        return Observable.throw(error);
      });
  }
}