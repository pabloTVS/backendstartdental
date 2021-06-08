import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseFormCustomers } from '@shared/utils/customer-form'
import { CustomersService } from '@pages/admin/services/customers.service'

@Component({
  selector: 'app-customers.modal',
  templateUrl: './customers.modal.component.html',
  styleUrls: ['./customers.modal.component.scss']
})
export class CustomersModalComponent implements OnInit, OnDestroy {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public custForm: BaseFormCustomers,
    private custSvc: CustomersService) { }

  ngOnInit(): void {
    if (this.data?.customer?.hasOwnProperty('IdCliente')){
      this.data.title= 'Edicción de clientes'
      this.pathFormData();}
  }

  checkField(field: string): boolean {
    return this.custForm.isValidField(field);
  }  

  onSave(): void {
    const formValue = this.custForm.customersForm.value;
      const custId = this.data?.prod?.IdCliente;
      this.custSvc.update(custId, formValue).subscribe((res) => 
      {console.log('Update', res);});

  }

  private pathFormData(): void {
    this.custForm.customersForm.patchValue({
      Nombre: this.data?.customer?.Nombre,
      DNINIF: this.data?.customer?.DNINIF,
      Telefono1: this.data?.customer?.Telefono1,
      Email1: this.data?.customer?.Email1,
      Fax1: this.data?.customer?.Fax1,
      Movil1: this.data?.customer?.Movil1,
      CodFormaPago: this.data?.customer?.CodFormaPago,
      RE: this.data?.customer?.RE,
      DtoPP: this.data?.customer?.DtoPP,
      DtoComercial: this.data?.customer?.DtoComercial,
      CodPostal: this.data?.customer?.CodPostal,
      Localidad: this.data?.customer?.Localidad,
      Provincia: this.data?.customer?.Provincia,
      Direccion: this.data?.customer?.Direccion,
      Entidad: this.data?.customer?.Entidad,
      Oficina: this.data?.customer?.Oficina,
      DC: this.data?.customer?.DC,
      Cuenta: this.data?.customer?.Cuenta,
      IBAN: this.data?.customer?.IBAN
    })
  }

  ngOnDestroy(){
    this.custForm.customersForm.reset();
  }

}
