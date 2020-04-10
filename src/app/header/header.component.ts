import { Component, OnInit, Input } from '@angular/core';
import { IngresosService } from '../ingresos/ingresos.service';
import { EgresoService } from '../egresos/egreso.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  @Input() total:number;
  @Input() totalIngreso:number;
  @Input() totalEgreso:number;

  constructor() { }

}
