import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { IProduct } from '../../interfaces/product';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../../core/components/footer/footer.component';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ToastSuccessComponent } from "../../../../core/components/toast-success/toast-success.component";
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    FooterComponent,
    CommonModule,
    ProductFormComponent,
    ToastSuccessComponent
],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {
  router = inject(Router)
  productList: IProduct[]=[];
  productService = inject(ProductService);
  cdr = inject(ChangeDetectorRef)

  ngOnInit(){
    this.productService.getAllProduct().subscribe(result => {
      this.productList = result;
    });
  }

  loadProducts() {
    this.productService.getAllProduct().subscribe(result => {
      this.productList = result;
      this.cdr.detectChanges();
    });
  }

  onProductAdded() {
    this.loadProducts();
  }
}
