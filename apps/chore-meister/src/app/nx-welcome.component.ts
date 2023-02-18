import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cm-app-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 class="text-3xl underline">
      <span> Hello there, </span>
      Welcome chore-meister 👋
    </h1>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
