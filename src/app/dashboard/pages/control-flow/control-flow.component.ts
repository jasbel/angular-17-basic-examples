import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A'|'B'|'C'|'D'|'E'|'F';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal(true);
  public grade = signal<Grade>('A');
  public framework = signal(['Angular', 'Vue', 'Svelte', 'Qwik', 'React'])


  public toggleContent() {
    this.showContent.update(value => !value)
  }

}
