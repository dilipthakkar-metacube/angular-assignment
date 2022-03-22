import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Output() deleteTaskEvent = new EventEmitter<Task>();
  @Output() openModalForUpdateEvent = new EventEmitter<Task>();
  constructor() {}

  deleteTask() {
    this.deleteTaskEvent.emit(this.task);
  }

  updateTask() {
    this.openModalForUpdateEvent.emit(this.task);
  }

  ngOnInit(): void {}
}
