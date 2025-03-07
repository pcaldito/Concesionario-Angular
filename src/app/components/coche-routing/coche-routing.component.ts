import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-coche-routing',
  templateUrl: './coche-routing.component.html',
  styleUrls: ['./coche-routing.component.css']
})
export class CocheRoutingComponent implements OnInit {

  formularioContacto: FormGroup
  tipoDni:string='DNI'
 
  constructor( private form: FormBuilder){
    this.formularioContacto=this.form.group({
      nombre: ['', [Validators.required,Validators.minLength(3)]],
      apellido: ['', [Validators.required,Validators.minLength(3)]],
      dni: ['', [Validators.required,Validators.minLength(3)]],
      tipoDni: ['', [Validators.required,Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
     this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(value =>{
      this.tipoDni=value
     })
  }

  hasErrors(controlName: string, errorType:string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
  }

  enviar(){
    console.log(this.formularioContacto);
  }

}
