import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { viewProducts } from '@shared/models/viewProducts.interface'
import { productsService} from '@pages/products/services/products.service'

export interface typesOfVat {
    value: string;
    viewValue: string;
}
export interface productStatus {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  custProduct: number;
  product: viewProducts;
  selectedState: string; //valor del estado
  selectedVat: string; //valor del IVA.
  imagen: string;
  //newProduct: boolean=false;

  productStatus: productStatus[] =
  [
    {value: 'publish', viewValue: 'Publicado'},
    {value: 'pending', viewValue: 'Pendiente'}
  ];

  typeVat: typesOfVat[] = 
  [
    {value: '', viewValue: '21%'},
    {value: 'tasa-reducida', viewValue: '10%'}
  ];


  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private prodSvc: productsService
  ) { }

  productForm = this.fb.group({
    Articulo: ['',[Validators.required,Validators.minLength(3),Validators.pattern('^[A-Za-z0-9.-ñÑáéíóúÁÉÍÓÚ ]+$')]],
    Url: ['',[Validators.required,Validators.minLength(3),Validators.pattern('^[A-Za-z0-9-_ñÑáéíóúÁÉÍÓÚ]+$')]],
    DescCorta: [''],
    Estado: [''],
    sku: ['',[Validators.required]],
    iva: [''],
    precio: [0,[Validators.required,Validators.pattern('^[A-Z0-9,.]+$')]],
    precioRebajado: [0,[Validators.required,Validators.pattern('^[A-Z0-9,.]+$')]],
    stock: [0,[Validators.pattern('^[0-9]+$')]],
    det_Imagen: ['']
  })

  ngOnInit(): void {
    try {
      this.route.queryParams.subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.custProduct = +params['Id'] || 0;
      });
      if (this.custProduct !=0)
      {
         this.prodSvc.getById(this.custProduct).subscribe(prod =>{
           console.log(prod);
           this.product = prod;
           this.productForm.patchValue(this.product);
           this.selectedState = prod.Estado;
           this.selectedVat = prod.IVA;
           this.imagen = prod.det_Imagen;
         })
      }
      //else this.newProduct = true;
    } catch (e) {
      console.log(e.message);
    }
  }

  onSubmit(): void {
    try {
      this.prodSvc.updateProducts(this.custProduct,this.productForm.value).subscribe();
      window.alert('Cambios guardados correctamente.')

    } catch (error) {
      console.log('Error guardandado cambios.')
    }
  }

  isValidField(name: string): boolean {
    const fieldName = this.productForm.get(name);
    this.productForm.get(name).errors
    return fieldName.invalid && fieldName.touched;
  }
}
