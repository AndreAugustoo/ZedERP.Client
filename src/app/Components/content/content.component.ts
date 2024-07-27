import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HttpService } from '../../http.service';
import { IContent } from '../../Interfaces/content';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [FooterComponent, NgIf, NgFor],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  contentList: IContent[]=[];
  httpService = inject(HttpService);

  isLogged:boolean = true;
  userName:string = "Andre Oliveira";

  ngOnInit(){
    this.httpService.getAllProduct().subscribe(result => {
      this.contentList = result;
      console.log(this.contentList);
    });
  }
}
