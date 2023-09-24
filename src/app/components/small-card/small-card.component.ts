import { Component } from '@angular/core';
import { dataFake } from '../../../data/dataFake'

interface Posts {
  id: number;
  title: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  posts: Posts[] = dataFake.slice(1, 4);
}
