
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

import { Recipe } from 'app/shared/recipe.model';
import { RecipeService } from "app/services/recipe.service";
import { RecipeDetails } from "app/shared/recipe-details.model";

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: RecipeService) { }

  storeRecipes(): Observable<Response> {
    return this.http.put('https://udemy-ng-recipe-book-a5dc3.firebaseio.com/recipes.json', this.recipeService.getRecipes())
      .catch((error: Response) => {
        return Observable.throw(error);
      });
  }

  fetchRecipes(): Observable<Recipe[]> {
    return this.http.get('https://udemy-ng-recipe-book-a5dc3.firebaseio.com/recipes.json')
      .map((response: Response) => {
        const data: Recipe[] =  (<Recipe[]>response.json());
        const recipeList: Recipe[] = [];
        data.forEach((item) => {
          let details: RecipeDetails;
          if (!item.details) {
            details = new RecipeDetails();
          }
          else {
            details = new RecipeDetails(item.details.ingredients, item.details.instructions); 
          }
          recipeList.push(new Recipe(item.name, item.description, item.imagePath, details, item.id));
        });
        console.log(recipeList);
        
        return recipeList;
      })
      .catch((error: any) => {
        return Observable.throw(error);
      });
  }
}