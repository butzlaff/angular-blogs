import { Component } from '@angular/core';
import { dataFake } from '../../../data/dataFake'

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  private dataFake = dataFake[0];
  Id: number = this.dataFake.id;
  bigCardTitle: string = this.dataFake.title;
  bigCardImage: string = this.dataFake.image;
  bgCardText: string = this.dataFake.description;
}
