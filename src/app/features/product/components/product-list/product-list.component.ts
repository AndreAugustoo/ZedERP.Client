import { Component, inject } from '@angular/core';
import { HttpService } from '../../../../http.service';
import { IProduct } from '../../interfaces/product';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../../core/components/footer/footer.component';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ToastSuccessComponent } from "../../../../core/components/toast-success/toast-success.component";
import { Router } from '@angular/router';

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
  contentList: IProduct[]=[];
  httpService = inject(HttpService);

  ngOnInit(){
    this.httpService.getAllProduct().subscribe(result => {
      this.contentList = result;
    });
  }

  edit(code:string){
    this.router.navigateByUrl("/edit-product/" + code)
    console.log(code);
  }
}
