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

  

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private prodSvc: productsService
  ) { }

  ngOnInit(): void {
  }

}
