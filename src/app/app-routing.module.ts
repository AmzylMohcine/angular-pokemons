import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { PokemonsComponent } from './list-pokemons/pokemons.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [

  { path: '' , redirectTo:'/pokemon/all' , pathMatch:'full'},
  { path: 'pokemon/all' ,component : PokemonsComponent} , 

  { path: '**' , component: PageNotFoundComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
