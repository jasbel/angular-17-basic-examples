import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css',
})
export class SidemenuComponent {
  menuItems = routes
      .map((r) => r.children ?? [])
      .flat()
      .filter((r) => r?.path)
      .filter((r) => !r?.path?.includes(':'));

  constructor() {

  }
}
