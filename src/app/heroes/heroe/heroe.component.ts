import { Component, NgModule } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})


export class HeroeComponent{

        nombre:string='Iroman';
        edad:number=45;

        get nombreCapitalizado(){
            return this.nombre.toUpperCase();
        }

        obtenerNombre():string{
            return ` ${this.nombre} - ${this.edad}`;
        }

        cambiarNombreHeroe():void{
            this.nombre='spiderman';
        }

        cambiarEdadHeroe():void{
            this.edad=40;
        }
} 