import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseFormProduct } from '@shared/utils/product-form';

import { productsService } from '@pages/products/services/products.service';

@Component({
  selector: 'app-product.modal',
  templateUrl: './product.modal.component.html',
  styleUrls: ['./product.modal.component.scss']
})
export class ProductModalComponent implements OnInit, OnDestroy {
  
  constructor(    
    @Inject(MAT_DIALOG_DATA) public data: any,
    public prodForm: BaseFormProduct,
    private prodSvc: productsService) { }
 
  ngOnDestroy(){
    this.prodForm.productForm.reset();
    }  

  ngOnInit(): void {
    //this.data = this.prodSvc.getById(216);
    if (this.data?.prod?.hasOwnProperty('ID')){
      this.data.title= 'Edicción de productos'
      this.pathFormData();
    }
  }

  onSave(): void {
    const formValue = this.prodForm.productForm.value;
      const prodId = this.data?.prod?.ID;
//      console.log(prodId);
//      console.log(formValue);
      this.prodSvc.updateProducts(prodId, formValue).subscribe((res) => {console.log('Update', res);});

  }

  checkField(field: string): boolean {
      return this.prodForm.isValidField(field);
  }
     
  private pathFormData(): void {
      this.prodForm.productForm.patchValue({
        articulo: this.data?.prod?.Articulo,
        sku: this.data?.prod?.Sku,
        precio: this.data?.prod?.Precio,
        stock: this.data?.prod?.Stock
      })
  }
}





