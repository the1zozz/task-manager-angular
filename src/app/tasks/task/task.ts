import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type TaskProps } from './task.model';
import { Card } from "../../shared/card/card";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
@Input({required: true}) task !: TaskProps ;
private taskService = inject(TasksService);

onCompleteTask(){
  this.taskService.removeTask(this.task.id);
}
}