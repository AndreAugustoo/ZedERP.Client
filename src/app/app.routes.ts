import { Routes } from '@angular/router';
import { ProductListComponent } from './features/product/components/product-list/product-list.component';
import { ProductFormComponent } from './features/product/components/product-form/product-form.component';

export const routes: Routes = [
    {
        path:"product-list",
        component:ProductListComponent
    },
    {
        path:"create-product",
        component:ProductFormComponent
    }
];
