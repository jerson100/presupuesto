import { Injectable } from '@angular/core';
import { Egreso } from './egresos';
import { Crud } from '../crud';

export class EgresoService implements Crud<Egreso>{

  private egresos : Egreso[] = [
    new Egreso("Renta Dep",900),
    new Egreso("Ropa",200),
  ];

  constructor() { }

  public add(obj : Egreso):void{
    this.egresos.push(obj);
  }

  public all():Egreso[]{
    return this.egresos;
  }

  public remove(index:number):void{
    this.egresos.splice(index,1);
  }

  public read(index:number):Egreso{
    return this.egresos[index];
  }

  public sum():number{
    let sum : number= 0;
    this.egresos.forEach(it=>{
      sum += it.value;
    });
    return sum;
  }

  
}
