import { Component, OnInit, Input } from '@angular/core';
import { Ingreso } from './ingresos';
import { IngresosService } from './ingresos.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit{

  ing:Ingreso[] = [];

  constructor(private _servicioIngreso:IngresosService) { }

  ngOnInit(){
    this.ing = this._servicioIngreso.all();
  }

  public delete(index:number):void{
    this._servicioIngreso.remove(index);
  }

}
