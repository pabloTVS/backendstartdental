import { Component, OnInit, OnDestroy, AfterViewInit,ViewChild } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { SpinnerOverlayService } from '@shared/services/spinner-overlay.service'
import { MatDialog } from '@angular/material/dialog';
import { CustomersModalComponent } from '@pages/admin/components/modal/customers.modal/customers.modal.component'
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})
export class CustomersListComponent implements AfterViewInit, OnInit, OnDestroy {
  displayedColumns: string[] = ['IdCliente', 'Nombre', 'DNINIF','Telefono1','Email1', 'Movil1','CodPostal','Localidad','Provincia','Direccion', 'Acciones'];
  
  DSCustomer = new MatTableDataSource();

  private destroy$ = new Subject<any>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator; 

  constructor(private custSvc: CustomersService,
    private spinnerSvc: SpinnerOverlayService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.spinner();
    this.custSvc.getAll().subscribe((customers) =>{
      this.DSCustomer.data= customers;
      this.spinner();
    })
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.DSCustomer.filter = filterValue.trim().toLowerCase();

    if (this.DSCustomer.paginator) {
      this.DSCustomer.paginator.firstPage();
    }
  }
  
  spinner()
  {
      this.DSCustomer.data.length >0 ? this.spinnerSvc.hide() : this.spinnerSvc.show();
  }
 
  onOpenModal(customer = {}): void {
    // console.log('prod->', prod);
     let dialogRef = this.dialog.open(CustomersModalComponent, {
       height: '768px',
       width: '1024px',
       hasBackdrop: false,
       data: { title: 'Clientes', customer },
     });
     dialogRef.afterClosed().subscribe(result => {
       console.log(`Dialog result: ${result}`, typeof result);
       // Update result after adding new user.
       this.custSvc.getAll().subscribe((customer) => {this.DSCustomer.data = customer;});
     });
  }
 
  onDelete(custId: number) :void{
    if (window.confirm('¿Estás seguro de borrar este cliente?.')) {
      this.custSvc
        .delete(custId)
        .pipe(takeUntil(this.destroy$))
        .subscribe((res) => {
          window.alert(res);
          // Update result after deleting the customer.
          this.custSvc.getAll().subscribe((customer) => {
            this.DSCustomer.data = customer;
          });
        });
    }
  }
  
  ngAfterViewInit(): void {
    this.DSCustomer.sort = this.sort;
  }
  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }
}
