import { NgClass, NgIf } from '@angular/common';
import { Component, inject, Output, EventEmitter } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { AddProductDto } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ToastService } from '../../../../core/components/toast-success/toast-success.service';
import { CloseModalService } from '../../../../shared/services/close-modal.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  @Output() productAdded = new EventEmitter<void>();
  productService = inject(ProductService);
  private formBuilder = inject(FormBuilder);
  private toastService = inject(ToastService);
  private closeModalService = inject(CloseModalService);
  
  protected productForm = this.formBuilder.group({
    code: [null, [Validators.required, Validators.maxLength(14)]],
    name: [null, [Validators.required, Validators.maxLength(255)]],
    groupId: [null, []],
    unitId: [null, [Validators.required]],
    salePrice: [null, [Validators.required, Validators.min(0)]],
    stock: [0, []],
    image: [null, []],
  });

  closeProductFormModal() {
    this.closeModalService.closeModal('product-form-modal');
  }

  save() {
    if (this.productForm.invalid) {
      return;
    }
    const product: AddProductDto = {
      code: this.productForm.value.code!,
      name: this.productForm.value.name!,
      groupId: this.productForm.value.groupId!,
      unitId: this.productForm.value.unitId!,
      salePrice: this.productForm.value.salePrice!,
      stock: this.productForm.value.stock!,
      image: this.productForm.value.image!,
    }
    this.productService.createProduct(product).subscribe(() => {
      this.productForm.reset();
      this.toastService.showSuccess();
      this.closeProductFormModal();
      this.productAdded.emit();
    });
  }
}
