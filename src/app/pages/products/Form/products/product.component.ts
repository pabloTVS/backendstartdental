import { product } from '@shared/models/Products.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { viewProducts } from '@shared/models/viewProducts.interface'
import { productsService} from '@pages/products/services/products.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  custProduct: number;
  product: viewProducts;
  //newProduct: boolean=false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private prodSvc: productsService
  ) { }

  productForm = this.fb.group({
    Articulo: ['',[Validators.required,Validators.minLength(3),Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]],
    Url: ['',[Validators.required,Validators.minLength(3),Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]],
    DescCorta: [''],
    estado: ['',[Validators.required]],
    sku: ['',[Validators.required]],
    iva: [''],
    precio: [0,[Validators.required,Validators.pattern('^[A-Z0-9,.]+$')]],
    precioRebajado: [0,[Validators.required,Validators.pattern('^[A-Z0-9,.]+$')]],
    stock: [0,[Validators.pattern('^[0-9]+$')]]
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
