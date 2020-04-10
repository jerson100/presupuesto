import { Component, OnInit } from '@angular/core';
import { EgresoService } from '../egresos/egreso.service';
import { IngresosService } from '../ingresos/ingresos.service';
import { Ingreso } from '../ingresos/ingresos';
import { Egreso } from '../egresos/egresos';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

  constructor(private _servicioEgresos:EgresoService,
              private _servicioIngresos:IngresosService) { }

  public add(tipo:HTMLInputElement,
             descripcion:HTMLInputElement,
             precio:HTMLInputElement):void{

    switch(tipo.value){

      case "sumar":

        let objIngreso = new Ingreso(descripcion.value,parseInt(precio.value));

        this._servicioIngresos.add(objIngreso);

        break;

      case "restar":

        let objEgreso = new Egreso(descripcion.value,parseInt(precio.value));

        this._servicioEgresos.add(objEgreso);
        
        break;

      default:
        console.log("Opción no disponible");

    }

  }

}

