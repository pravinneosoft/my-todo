import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './mycompenent/todos/todos.component';
import { TodoItemsComponent } from './mycompenent/todo-items/todo-items.component';
import { AddTodoComponent } from './mycompenent/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './mycompenent/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemsComponent,
    AddTodoComponent,
    AboutComponent
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
