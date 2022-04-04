import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { PokemonsComponent } from './list-pokemons/pokemons.component';

import { BorderCardDirective } from './directives/border-card-directives';

import { pokemonTypeColor } from './pipes/pokemon-type-color.pipe';

@NgModule({
  declarations: [
    AppComponent , 
    PokemonsComponent , 
    BorderCardDirective , 
    pokemonTypeColor
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
