import { Component, inject } from '@angular/core';
import { HttpService } from '../../../../http.service';
import { IContent } from '../../interfaces/content';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../../core/components/footer/footer.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FooterComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  contentList: IContent[]=[];
  httpService = inject(HttpService);

  ngOnInit(){
    this.httpService.getAllProduct().subscribe(result => {
      this.contentList = result;
    });
  }
}
