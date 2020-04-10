import { Component, Input, OnInit } from '@angular/core';
import { EgresoService } from './egreso.service';
import { Egreso } from './egresos';
import { IngresosService } from '../ingresos/ingresos.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit{
  
  egresos:Egreso[];
  @Input() total:number;

  constructor(private _servicioEgreso:EgresoService) { }
  
  ngOnInit(){
    this.egresos = this._servicioEgreso.all();
  }

  delete(index:number):void{
    this._servicioEgreso.remove(index);
  }

}
