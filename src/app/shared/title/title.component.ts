import { Component, Input, booleanAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 class="text-3xl mb-5" [ngClass]="{'shadow-2xl': withShadow}">{{title}}</h1>

  `,
  styles: ``
})
export class TitleComponent {
  @Input({required: true}) title!: string ;
  @Input({transform: booleanAttribute}) withShadow: boolean = false
}