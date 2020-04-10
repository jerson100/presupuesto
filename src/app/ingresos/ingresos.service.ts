import { Ingreso } from './ingresos';
import { Crud } from '../crud';

export class IngresosService implements Crud<Ingreso> {

  private ingresos : Ingreso[] = [
    new Ingreso("Salario",4000),
    new Ingreso("Venta de coche",500),
  ];

  constructor() { }

  public add(obj : Ingreso):void{
    this.ingresos.push(obj);
  }

  public all():Ingreso[]{
    return this.ingresos;
  }

  public remove(index:number):void{
    this.ingresos.splice(index,1);
  }

  public read(index:number):Ingreso{
    return this.ingresos[index];
  }

  public sum():number{
    let sum : number= 0;
    this.ingresos.forEach(it=>{
      sum += it.value;
    });
    return sum;
  }

}
