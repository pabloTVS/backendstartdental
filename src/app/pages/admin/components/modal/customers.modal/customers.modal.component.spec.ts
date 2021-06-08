import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customers.ModalComponent } from './customers.modal.component';

describe('Customers.ModalComponent', () => {
  let component: Customers.ModalComponent;
  let fixture: ComponentFixture<Customers.ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Customers.ModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Customers.ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
