import { Component, inject } from '@angular/core';
import { HttpService } from '../../http.service';
import { IContent } from '../../Interfaces/content';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [FooterComponent, CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  contentList: IContent[]=[];
  httpService = inject(HttpService);

  ngOnInit(){
    this.httpService.getAllProduct().subscribe(result => {
      this.contentList = result;
    });
  }
}
