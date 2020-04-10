export interface Crud<T> {
    add(t:T):void;
    remove(index:number):void;
    all():T[];
    read(index:number):T;
    sum():number;
}
