import { productsService } from './services/products.service';
import { SpinnerOverlayService } from './../../shared/services/spinner-overlay.service'
import { Component, AfterViewInit, ViewChild, Input } from '@angular/core';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

/*export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
*/
/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements AfterViewInit {
  displayedColumns: string[] = ['Imagen', 'Articulo', 'Sku', 'Precio', 'IVA', 'Stock', 'Proveedor', 'Categoria', 'Subcategoria'];
  dataSource = new MatTableDataSource();
 
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator; 

  @Input() imgPath:string = "https://startdental.es/wp-content/uploads/";
  
  constructor(private viewProd: productsService, private spinnerSvc: SpinnerOverlayService) {}

  ngOnInit(): void {
    this.spinner();
    this.viewProd.getAllProducts().subscribe((products) => {
      
      this.dataSource.data = products;
      this.spinner();
      
    });
    
  }

  ngAfterViewInit() {
    //this.spinnerSvc.hide();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  spinner()
  {
      this.dataSource.data.length >0 ? this.spinnerSvc.hide() : this.spinnerSvc.show();
  }
}