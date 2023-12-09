import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from '@interfaces/req-response';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
  <app-title [title]="titleLabel()" />

  @if(user()) {
    <section>
      <img  [alt]="user()!.first_name" [srcset]="user()!.avatar" />


      <div>
        <h3>{{user()?.first_name}} {{user()?.last_name}} </h3>
        <p>{{user()?.email}}</p>

      </div>

    </section>
  } @else {
    <p>Cargando informacion</p>
  }
  `,
  styles: ``,
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  );

  public titleLabel = computed(() => {
    if (this.user()) return `INfromacion de usuario ${this.user()?.first_name}`;
    return 'Informacion del Usuario';
  });
  // public user = signal<User | undefined>(undefined);

  constructor() {
    // this.route.params
  }
}
