import { FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class BaseFormCustomers {
    errorMessage = null;
    private isValidEmail = /\S+@\S+\.\S+/;
    

    constructor(private fb: FormBuilder) {}
    customersForm = this.fb.group({
        Nombre: ['',[Validators.required,Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]],
        DNINIF: ['', [Validators.required,Validators.pattern('^[A-Za-z0-9]+$')]],
        Telefono1: ['',[Validators.minLength(9),Validators.pattern('^[0-9]+$')]],
        Email: ['', [Validators.required, Validators.pattern(this.isValidEmail)]],
        Fax1: ['',[Validators.minLength(9),Validators.pattern('^[0-9]+$')]],
        Movil1: ['',[Validators.minLength(9),Validators.pattern('^[0-9]+$')]],
        CodFormaPago: ['',[Validators.required,Validators.pattern('^[0-9]+$')]],
        RE: ['',[Validators.pattern('^[0-1]+$')]],
        DtoPP: ['',[Validators.pattern('^[0-9.]+$')]],
        DtoComercial: ['',[Validators.pattern('^[0-9.]+$')]],
        CodPostal: ['',[Validators.required,Validators.minLength(4),Validators.pattern('^[0-9]+$')]],
        Localidad: ['',[Validators.required,Validators.minLength(3),Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]],
        Provincia: ['',[Validators.required,Validators.minLength(3),Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]],
        Direccion: ['',[Validators.required,Validators.minLength(3),Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]],
        Entidad: ['',[Validators.maxLength(4),Validators.minLength(4),Validators.pattern('^[0-9]+$')]],
        Oficina: ['',[Validators.maxLength(4),Validators.minLength(4),Validators.pattern('^[0-9]+$')]],
        DC: ['',[Validators.maxLength(2),Validators.minLength(2),Validators.pattern('^[0-9]+$')]],
        Cuenta: ['',[Validators.maxLength(10),Validators.minLength(10),Validators.pattern('^[0-9]+$')]]
        });
      
        isValidField(field: string): boolean {
          this.getErrorMessage(field);
          return (this.customersForm.get(field).invalid && this.customersForm.get(field).touched);
        }
      
        private getErrorMessage(field: string): void {
          const { errors } = this.customersForm.get(field);
      
          if (errors) {
            const minlenght = errors?.minlength?.requiredLength;  
            const maxlenght = errors?.minlength?.requiredLength;
            const messages = {
              required: 'Debes introducir un valor.',
              pattern: 'Carácteres no válidos.',
              minlength: `Este campo tiene una longitud mínima de ${minlenght} caracteres.`,
              maxlenght: `Este campo debe tener ${maxlenght} caracteres.`,

            };
      
            const errorKey = Object.keys(errors).find(Boolean);
            this.errorMessage = messages[errorKey];
          }
        }
    }