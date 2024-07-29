import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../../../../http.service';
import { IProduct } from '../../interfaces/product';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})

export class ProductFormComponent {
  httpService = inject(HttpService);
  formBuilder = inject(FormBuilder);
  route = inject(ActivatedRoute);
  productForm = this.formBuilder.group({
    code:['',[Validators.required]],
    name:['',[Validators.required]],
    groupId:[null,[]],
    unitId:[null,[Validators.required]],
    salePrice:[,[Validators.required]],
    stock:[0,[]],
    image:['',[]],
  });

  showToast() {
    const toast = document.getElementById('toast-success');
    if (toast) {
      toast.classList.remove('hidden');
      // Esconder o toast após alguns segundos
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 4000);
    }
  }
  
  productCode!:string;
  ngOnInit(){
    this.productCode = this.route.snapshot.params['code'];
  }

  save(){
    const product : IProduct = {
      code: this.productForm.value.code!,
      name: this.productForm.value.name!,
      group: this.productForm.value.groupId!,
      unit: this.productForm.value.unitId!,
      salePrice: this.productForm.value.salePrice!,
      stock: this.productForm.value.stock!,
      image: this.productForm.value.image!
    }
    this.httpService.createProduct(product).subscribe(() => {
      this.productForm.reset();
      this.showToast();
    });
  }
}
