
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

import { Recipe } from 'app/shared/recipe.model';
import { RecipeService } from "app/services/recipe.service";

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
                const data: any[] =  response.json();
                const recipeList: Recipe[] = [];
                data.forEach((item: Recipe) => {
                    recipeList.push(new Recipe(item.name, item.description, item.imagePath, item.details, item.id));
                });
                return recipeList;
            })
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }
}