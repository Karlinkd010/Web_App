import { Injectable } from "@angular/core";
import { Personaje } from '../dbz/interface/personaje.interface';

@Injectable()
export class DbzService{

    constructor(){
        console.log("Servivio inicializado")
    }

    private _personajes:Personaje[]=[
        {
          nombre:'Goku',
          poder :1230
        },
        {
          nombre:'Vegeta',
          poder:1100
        },
        {
          nombre:'Bulma',
          poder:1000
        }
      ]

    get personajes():Personaje[]{
        return [...this._personajes];
    }

    agregarPersonaje(persoaje:Personaje){
        this._personajes.push(persoaje);
    }



}