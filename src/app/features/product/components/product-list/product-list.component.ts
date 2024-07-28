import { Component, inject } from '@angular/core';
import { HttpService } from '../../../../http.service';
import { IProduct } from '../../interfaces/product';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../../core/components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ToastSuccessComponent } from "../../../../core/components/toast-success/toast-success.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    FooterComponent,
    CommonModule,
    RouterLink,
    ProductFormComponent,
    ToastSuccessComponent
],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  contentList: IProduct[]=[];
  httpService = inject(HttpService);

  ngOnInit(){
    this.httpService.getAllProduct().subscribe(result => {
      this.contentList = result;
    });
  }
}
