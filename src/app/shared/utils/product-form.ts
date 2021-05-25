import { FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class BaseFormProduct {
    errorMessage = null;

    constructor(private fb: FormBuilder) {}
    productForm = this.fb.group({
        articulo: ['',[Validators.required]],
        sku: ['', [Validators.required]],
        precio: ['', [Validators.required]],
        stock: ['', [Validators.required]],
        });
      
        isValidField(field: string): boolean {
          this.getErrorMessage(field);
          return (this.productForm.get(field).invalid && this.productForm.get(field).touched);
        }
      
        private getErrorMessage(field: string): void {
          const { errors } = this.productForm.get(field);
      
          if (errors) {
            const messages = {
              required: 'Debes introducir un valor.',
            };
      
            const errorKey = Object.keys(errors).find(Boolean);
            this.errorMessage = messages[errorKey];
          }
        }
    }