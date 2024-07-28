import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from "../../../features/product/components/product-list/product-list.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  
}
