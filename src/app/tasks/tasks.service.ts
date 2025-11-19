import { Injectable } from '@angular/core';
import { type newTaskProps } from './task/task.model';

@Injectable({providedIn: 'root'})
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'master angular',
      summary: 'learn all the basic and advanced angular concepts',
      dueDate: '2025-11-18',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'practice piano',
      summary: 'practice piano for at least 30 minutes',
      dueDate: '2025-11-19',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'go for a run',
      summary: 'run at least 5 kilometers in the park',
      dueDate: '2025-11-20',
    },
  ];

  constructor(){
    const tasks = localStorage.getItem('tasks');

    if(tasks){
        this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(newTask: newTaskProps, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    });
    this.saveTasksToStorage();
  }
  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasksToStorage();
  }
  private saveTasksToStorage(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
