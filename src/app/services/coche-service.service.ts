import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocheServiceService {

  private coches = [
    { id: 1, marca: 'Toyota', modelo: 'Corolla', anio: 2020 },
    { id: 2, marca: 'Honda', modelo: 'Civic', anio: 2019 },
    { id: 3, marca: 'Ford', modelo: 'Focus', anio: 2018 },
    { id: 4, marca: 'Chevrolet', modelo: 'Malibu', anio: 2021 },
    { id: 5, marca: 'Nissan', modelo: 'Sentra', anio: 2022 }
  ];

  constructor() { }

  getCoches(){
    return this.coches;
  }

  addCoche(marca: string, modelo: string, anio: number){
    const newCoche = {id: this.coches.length + 1, marca, modelo, anio};
    this.coches.push(newCoche);
  }

  deleteCoche(cocheId: number){
    this.coches = this.coches.filter(c => c.id !== cocheId);
  }

  updateCoche(cocheId: number, marca: string, modelo: string, anio: number){
    const coche = this.coches.find(c => c.id === cocheId);
    if(coche){
      coche.marca = marca;
      coche.modelo = modelo;
      coche.anio= anio;
    }
  }
}
