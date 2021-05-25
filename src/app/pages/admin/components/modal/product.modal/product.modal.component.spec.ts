import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product.ModalComponent } from './product.modal.component';

describe('Product.ModalComponent', () => {
  let component: Product.ModalComponent;
  let fixture: ComponentFixture<Product.ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Product.ModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Product.ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
