import { Component, Input } from '@angular/core';
import { Task } from './task/task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'master angular',
      summary: 'learn all the basic and advanced angular concepts',
      dueDate: '2025-11-18'
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'practice piano',
      summary: 'practice piano for at least 30 minutes',
      dueDate: '2025-11-19'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'go for a run',
      summary: 'run at least 5 kilometers in the park',
      dueDate: '2025-11-20'
    }
  ];

  get selectedUserTasks(){
    return this.tasks.filter((task)=> task.userId === this.userId)
  }
}
