import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../../../../http.service';
import { IProduct } from '../../interfaces/product';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})

export class ProductFormComponent {
  httpService = inject(HttpService);
  formBuilder = inject(FormBuilder);
  productForm = this.formBuilder.group({
    code:['',[Validators.required]],
    name:['',[Validators.required]],
    groupId:[0,[]],
    unitId:[0,[Validators.required]],
    salePrice:[0,[Validators.required]],
    stock:[0,[]],
    image:['',[]],
  });

  closeModal() {
    const modal = document.getElementById('product-form-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
  }

  showToast() {
    const toast = document.getElementById('toast-success');
    if (toast) {
      toast.classList.remove('hidden');
      // Esconder o toast após alguns segundos
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 3000);
    }
  }
  
  save(){
    const product : IProduct = {
      code: this.productForm.value.code!,
      name: this.productForm.value.name!,
      groupId: this.productForm.value.groupId!,
      unitId: this.productForm.value.unitId!,
      salePrice: this.productForm.value.salePrice!,
      stock: this.productForm.value.stock!,
      image: this.productForm.value.image!
    }
    this.httpService.createProduct(product).subscribe(() => {
      this.productForm.reset();

      // Fechar o modal
      this.closeModal();

      // Mostrar toast de sucesso
      this.showToast();
    });
  }
}
