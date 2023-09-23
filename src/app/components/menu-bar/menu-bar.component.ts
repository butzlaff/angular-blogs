import { Component } from '@angular/core';
interface MenuItem {
  name: string;
  icon: string;
  route: string;
}
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  menuItems: MenuItem[] = [
    {
      name: 'Linkedin',
      icon: 'linkedin',
      route: 'https://www.linkedin.com/in/emilio-butzlaff/'
    },
    {
      name: 'Github',
      icon: 'github',
      route: 'https://github.com/butzlaff'
    },
  ];
}
