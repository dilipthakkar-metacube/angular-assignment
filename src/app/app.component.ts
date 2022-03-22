import { Component } from '@angular/core';
import { Task } from './MyComponents/task/task';
import { v4 as uuid } from 'uuid';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app-session-1';
  isOpenNewTask: boolean = false;
  taskForUpdate!: Task;

  taskList: Array<Task> = [
    {
      name: 'task1',
      id: uuid(),
      description: 'this is description of task',
      priority: 'low',
      status: 'new',
      startDate: new Date(),
      endDate: undefined,
    },
    {
      name: 'task2',
      id: uuid(),
      description: 'this is description of task',
      priority: 'medium',
      status: 'new',
      startDate: new Date(),
      endDate: undefined,
    },
    {
      name: 'task3',
      id: uuid(),
      description: 'this is description of task',
      priority: 'high',
      status: 'new',
      startDate: new Date(),
      endDate: undefined,
    },
    {
      name: 'task4',
      id: uuid(),
      description: 'this is description of task',
      priority: 'high',
      status: 'progress',
      startDate: new Date(),
      endDate: undefined,
    },
    {
      name: 'task5',
      id: uuid(),
      description: 'this is description of task',
      priority: 'high',
      status: 'progress',
      startDate: new Date(),
      endDate: undefined,
    },
    {
      name: 'task6',
      id: uuid(),
      description: 'this is description of task',
      priority: 'high',
      status: 'progress',
      startDate: new Date(),
      endDate: undefined,
    },
    {
      name: 'task7',
      id: uuid(),
      description: 'this is description of task',
      priority: 'high',
      status: 'progress',
      startDate: new Date(),
      endDate: undefined,
    },
    {
      name: 'task8',
      id: uuid(),
      description: 'this is description of task',
      priority: 'high',
      status: 'progress',
      startDate: new Date(),
      endDate: undefined,
    },
    {
      name: 'task9',
      id: uuid(),
      description: 'this is description of task',
      priority: 'high',
      status: 'completed',
      startDate: new Date(),
      endDate: undefined,
    },
    {
      name: 'task10',
      id: uuid(),
      description: 'this is description of task',
      priority: 'high',
      status: 'completed',
      startDate: new Date(),
      endDate: undefined,
    },
    {
      name: 'task11',
      id: uuid(),
      description: 'this is description of task',
      priority: 'high',
      status: 'completed',
      startDate: new Date(),
      endDate: undefined,
    },
  ];

  openTaskModal() {
    this.isOpenNewTask = true;
  }
  closeTaskModal() {
    this.isOpenNewTask = false;
    this.taskForUpdate.name = "";
    this.taskForUpdate.description = "";
    this.taskForUpdate.priority = "low";
    this.taskForUpdate.status = "new";
  }

  addTask(task: Task) {
    task.id = uuid();
    task.startDate = new Date();
    this.taskList.push(task);
    this.closeTaskModal();
    console.log(task);
  }

  deleteTask(task: Task) {
    this.taskList = this.taskList.filter((t) => t !== task);
  }

  openModalForUpdate(task: Task) {
    this.isOpenNewTask = true;
    this.taskForUpdate = task;
  }

  updateTask(task: Task) {
    this.taskList.forEach((t) => {
      if (t.id == task.id) {
        t.name = task.name;
        t.description = task.description;
        t.priority = task.priority;
        t.status = task.status;
        if (t.status == 'completed') t.endDate = new Date();
      }
    });
    this.isOpenNewTask = false;
  }

  drop(event: CdkDragDrop<Task[]>) {
    console.log(event);
    if (event.container.id == 'drop-list-new-task') {
      this.taskList[event.previousIndex].status = 'new';
    }

    if (event.container.id == 'drop-list-completed-task') {
      this.taskList[event.previousIndex].status = 'completed';
      this.taskList[event.previousIndex].endDate = new Date();
    }

    if (event.container.id == 'drop-list-progress-task') {
      this.taskList[event.previousIndex].status = 'progress';
    }
  }
}
