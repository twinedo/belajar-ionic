import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[]=[
    {
      id: 'r1',
      title: 'Burger',
      imageUrl: 'https://img.cinemablend.com/filter:scale/quill/9/6/6/3/7/a/96637aabb562881adec1336c0d78acc6cc5d1403.jpg?mw=600',
      ingredients: ['Roti', 'Selada', 'Daging', 'Tomat','Keju']
    },
    {
      id: 'r2',
      title: 'Richeese',
      imageUrl: 'https://www.richeesefactory.com/sites/default/media/library/combo-fav-combo-2pcs-hot-spicy-chicken-15c738b456bffa.jpg',
      ingredients: ['Ayam', 'Cabe', 'Keju']
    }
  ];

  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe =>{
      return recipe.id === recipeId;
    })
  };
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe =>{
      return recipe.id !== recipeId;
    });
  }
}
