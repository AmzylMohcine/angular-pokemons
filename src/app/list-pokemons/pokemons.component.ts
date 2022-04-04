import { Component , OnInit } from "@angular/core";

import { Pokemon } from "../donnee-pokemons/pokemon";
import { POKEMONS } from "../donnee-pokemons/mock-pokemons";
// importation d'anguar le router pour les liens
import { Router } from "@angular/router";


@Component({
    selector :'list-pokemons' ,
    templateUrl :'/pokemons.component.html'  ,

})

export class PokemonsComponent implements OnInit  {
    
    pokemons: Pokemon[] ;

    constructor() { 
      this.pokemons = [] ; 
    }

    ngOnInit(): void {

    this.pokemons = POKEMONS ; 
        
    }
}