
import { Component, Input,EventEmitter, Output } from '@angular/core';
import { Personaje } from '../interface/personaje.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {
  

  @Input() nuevo:Personaje={
    nombre:'',
    poder:0
  }
  // @Output() OnNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzservice:DbzService){
    

  }

  agregar(){
    if(this.nuevo.nombre.trim().length===0){
      return;
    }
    console.log(this.nuevo);
    // this.personajes.push(this.nuevo);
    // this.OnNuevoPersonaje.emit(this.nuevo);
    this.dbzservice.agregarPersonaje(this.nuevo);

    this.nuevo={
      nombre:'',
      poder:0
    }

    
  }


}
