import { Component, Input } from '@angular/core';

import { type TaskProps } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
@Input({required: true}) task !: TaskProps ;
}
