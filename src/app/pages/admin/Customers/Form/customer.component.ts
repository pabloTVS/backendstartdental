import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { Customer } from '@shared/models/customer.interface'
import { Payments } from '@shared/models/payments.interface'
import { CustomersService } from '../../services/customers.service';
import { PaymentsService} from '@pages/admin/services/payments.service'


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  
  //private isValidEmail = /\S+@\S+\.\S+/;

  custId :number;
  customer: Customer;
  payments: Payments []=[];
  selectedPayment: number;

  constructor(private custSvc: CustomersService,
              private paymSvc: PaymentsService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) { }

  customersForm = this.fb.group({
    Nombre: ['',[Validators.required,Validators.minLength(3),Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]],
    DNINIF: ['', [Validators.required,Validators.minLength(8),Validators.pattern('^[A-Za-z0-9]+$')]],
    CodFormaPago: [1,[Validators.required,Validators.pattern('^[0-9]+$')]],
    DtoPP: [0,[Validators.pattern('^[0-9.]+$')]],
    DtoComercial: [0,[Validators.pattern('^[0-9.]+$')]]
  })
  
  onSubmit(): void {
    console.log('Form->' + JSON.stringify(this.customersForm.value));
    this.custSvc.update(this.custId,this.customersForm.value).subscribe(data => {
      console.log(Response.error.toString);
    })
  }
  
  isValidField(name: string): boolean {
    const fieldName = this.customersForm.get(name);
    this.customersForm.get(name).errors
    return fieldName.invalid && fieldName.touched;
  }

  ngOnInit(): void {
   this.route.queryParams.subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.custId = +params['Id'] || 0;
    }).unsubscribe();

   if (this.custId !=0)
   {
      this.custSvc.getById(this.custId).subscribe(cust =>{
        this.customer = cust;
        this.customersForm.patchValue(this.customer);
        this.selectedPayment = cust.CodFormaPago;
      })

      this.paymSvc.getAll().subscribe(paym =>{
        this.payments = paym;     
      })
   }
  }
  
  updatePayment(id :number){
    console.log('Antes ',this.customer.CodFormaPago);
    this.customer.CodFormaPago = id;
    console.log('Después ',this.customer.CodFormaPago);
  }

  onReset(): void {
    this.customersForm.reset();
  }  
}

