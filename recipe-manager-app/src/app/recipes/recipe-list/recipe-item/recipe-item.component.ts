import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Recipe } from '../../../shared/recipe.model';
import { RecipeService } from "app/services/recipe.service";

@Component({
  selector: '[app-recipe-item]',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {    
  }

  @HostListener('click')
  onSelect() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
