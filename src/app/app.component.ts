import { Component } from '@angular/core';
import { IngresosService } from './ingresos/ingresos.service';
import { EgresoService } from './egresos/egreso.service';
import { Ingreso } from './ingresos/ingresos';
import { Egreso } from './egresos/egresos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto';
  
  ingresos: Ingreso[];
  egresos: Egreso[];

  constructor(private _serviceIngresos:IngresosService,
              private _serviceEgreso:EgresoService) { 
                
              }

  ngOnInit() {
    this.ingresos = this._serviceIngresos.all();
    this.egresos = this._serviceEgreso.all();
  }

  getTotal():number{
     return this.getTotalIngreso() - this.getTotalEgreso(); 
  }

  getTotalIngreso():number{
    return this._serviceIngresos.sum();
  }

  getTotalEgreso():number{
    return this._serviceEgreso.sum();
  }

}
