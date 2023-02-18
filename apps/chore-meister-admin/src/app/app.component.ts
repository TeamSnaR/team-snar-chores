import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'cm-admin-root',
  template: ` <h1 class="text-2xl text-red-500"></h1> `,
  styles: [],
})
export class AppComponent {
  title = 'chore-meister-admin';
}
