import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface Chore {
  id: number;
  title: string;
  description?: string;
  location?: string;
  due_date: Date;
}
interface ChoresState {
  chores: Chore[];
}

const DEFAULT_STATE: ChoresState = {
  chores: [
    {
      id: 1,
      title: 'Clean the fridge',
      location: 'Kitchen',
      due_date: new Date(),
    },
  ],
};

@Injectable({
  providedIn: 'root',
})
export class ChoresStore extends ComponentStore<ChoresState> {
  chores$ = this.select((s) => s.chores);
  constructor() {
    super(DEFAULT_STATE);
  }
}
