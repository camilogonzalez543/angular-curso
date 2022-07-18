import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[]=['Spiderman','Thor','Hulk','Adrian Ramos'];
  heroeBorrado: string='';

  borrarHeroe(){
    
    this.heroeBorrado = this.heroes.shift() || '';
    


   
    
    /* OTRA FORMA 
    console.log('Borrando...');
    this.heroes.splice(0,1);
    */
  }
  
}
