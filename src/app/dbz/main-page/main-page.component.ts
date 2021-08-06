import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interface/personaje.interface';
import { DbzService } from '../../services/dbz.service';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  // constructor(private dbzservice:DbzService){}
  
  nuevo:Personaje={
    nombre:'Maestro Roshi',
    poder :1230
  }

  // get personajes():Personaje[]{
  //  return this.dbzservice.personajes;
  // }

  // AgregarPersonaje( personaje:Personaje){
  //   console.log(personaje);
  //    this.personajes.push(personaje);
  // }

   


  
  

}
