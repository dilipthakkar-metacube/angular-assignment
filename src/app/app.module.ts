import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskComponent } from './MyComponents/task/task.component';
import { TopbarComponent } from './MyComponents/topbar/topbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskformComponent } from './MyComponents/taskform/taskform.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [AppComponent, TaskComponent, TopbarComponent,TaskformComponent],
  imports: [BrowserModule, ReactiveFormsModule , DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
