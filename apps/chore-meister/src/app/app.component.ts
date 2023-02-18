import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ChoresComponent } from './chores.component';

@Component({
  standalone: true,
  imports: [RouterModule, ChoresComponent],
  selector: 'cm-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chore-meister';
}
