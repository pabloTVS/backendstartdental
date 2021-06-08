import { FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class BaseFormUser {
  private isValidEmail = /\S+@\S+\.\S+/;
  errorMessage = null;

  constructor(private fb: FormBuilder) {}

  baseForm = this.fb.group({
    username: ['',[Validators.required, Validators.pattern(this.isValidEmail)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    role: ['', [Validators.required]],
  });

  isValidField(field: string): boolean {
    this.getErrorMessage(field);
    return (this.baseForm.get(field).invalid && this.baseForm.get(field).touched);
    }

  private getErrorMessage(field: string): void {
    const { errors } = this.baseForm.get(field);

    if (errors) {
      const minlenght = errors?.minlength?.requiredLength;
     // console.log('valor de longitud del campo ',field,' es de ',minlenght);
      const messages = {
        required: 'Debes introducir un valor.',
        pattern: 'No es un mail válido.',
        minlength: `Este campo tiene una longitud mínima de ${minlenght} caracteres.`,
      };

      const errorKey = Object.keys(errors).find(Boolean);
      this.errorMessage = messages[errorKey];
    }
  }
}
