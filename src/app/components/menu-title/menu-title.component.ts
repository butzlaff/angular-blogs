import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css']
})
export class MenuTitleComponent {

  private _blogTittle: string = '';
  constructor() { }
  ngOnInit(): void {
    this._blogTittle = 'Tecnologias Front-end';
  }

  get blogTittle(): string {
    return this._blogTittle;
  }
}
