export class Pokemon { 
    id:number; 
    hp:number ; 
    cp:number;
    name:string;
    picture:string; 
    types:Array<string> ;
    created:Date;


    constructor() {

        this.id= 0 ; 
        this.hp = 0 ; 
        this.cp = 0 ; 
        this.name =" NoName" ; 
        this.picture = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/109.png"; 
        this.types = ['plantes'] ; 
        this.created = new Date();
    }
}