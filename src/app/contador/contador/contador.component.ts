import {Component} from'@angular/core'

@Component ({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1><br>



        <button (click)="sumar()"> +1</button>
        <span> {{ numero }} </span>
        <button (click)="restar()"> -1</button><br>
        <button (click)="acumular(123)">Acumular</button>

        <button (click)="acumular(+2)">Otro boton para sumar</button>

        <br>
        <!-- tarea-->
        <h3>Tarea, la base es: <strong>{{base1}}</strong> </h3>
        <button (click)="acumularTarea(+ base1)">Sumar {{base1}}</button>
        <span> {{ numeroTarea }} </span>
        <button (click)="acumularTarea(- base1)">Restar {{base1}}</button>
        <!-- FIN tarea-->
    `

    
    
})


export class ContadorComponent{
            titulo: string = 'Contador App';
        numero: number= 10;

        /* Tarea*/
        numeroTarea: number=10;
        base1:number=5;
        /* fin tarea*/

        sumar(){
            this.numero = this.numero+1;
        }

        restar(){
            this.numero -= 1;
        }

        acumular(valor:number){
            this.numero += valor;
        }

        /* tarea */

        acumularTarea(valorTarea:number){
            this.numeroTarea +=   valorTarea;
        }
        /* fin tarea*/
}