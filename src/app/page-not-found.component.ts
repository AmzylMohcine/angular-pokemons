import { Component } from "@angular/core";

@Component ({
    selector :'page-404' , 
    template : ` <div class="center"> 
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png" /> 
    <h1> Hello , cette page , n'existe pas </h1> 
    <a href="pokemon/all" class="waves-teal btn-flat"> retourner a l'acceuil </a> 
    </div> ` 
})

export class PageNotFoundComponent{}