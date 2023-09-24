import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBH0FQEXHmqCQnL47UJkEWeHO2oBimLlJQZA&usqp=CAU"
  title: string = 'Post Title'
  description: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'

  private id: string | null = null;

    constructor(
      private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.setArticle(Number(this.id));
    })
  }

  setArticle(id: number): void {
    const result = dataFake.find(article => article.id == id);
    if (result) {
      this.photoCover = result.image;
      this.title = result.title;
      this.description = result.description;
    }
  }
}
