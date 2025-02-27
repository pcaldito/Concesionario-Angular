import { Component } from '@angular/core';
import { CocheServiceService } from 'src/app/services/coche-service.service';

@Component({
  selector: 'app-coche-list',
  templateUrl: './coche-list.component.html',
  styleUrls: ['./coche-list.component.css']
})
export class CocheListComponent {

    coches:any[]=[];
    newmarca:string ='';
    newmodelo:string='';
    newanio:number | undefined;

    constructor(private cocheService: CocheServiceService) {}

    ngOnInit(){
      this.coches=this.cocheService.getCoches();
    }

    deleteCoche(id:number){
      this.cocheService.deleteCoche(id);
      this.coches=this.cocheService.getCoches();
    }

    addCoche(){
      if(this.newmarca.trim() && this.newmodelo.trim() && this.newanio){
        this.cocheService.addCoche(this.newmarca, this.newmodelo, this.newanio);
        this.newmarca = '';
        this.newmodelo = '';
        this.newanio ;
      }
    }

    editCoche(id: number) {
      const coche = this.coches.find(c => c.id === id);
      if (coche) {
        const newmarca = prompt('Nueva marca:', coche.marca);
        const newmodelo = prompt('Nuevo modelo:', coche.modelo);
        const newanio = prompt('Nuevo Año:', coche.anio);
  
        if (newmarca !== null && newmodelo !== null && newanio !== null && !isNaN(Number(newanio))) {
          this.cocheService.updateCoche(id, newmarca, newmodelo, Number(newanio));
          this.coches = this.cocheService.getCoches();
        }
      }
    }
}
