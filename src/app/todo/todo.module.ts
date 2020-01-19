import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  NzButtonModule,
  NzInputModule,
  NzMessageModule,
  NzListModule
} from "ng-zorro-antd";

import { TodoComponent } from "./todo.component";
import { TodoTitleComponent } from "./todo-title/todo-title.component";
import { TodoInputComponent } from "./todo-input/todo-input.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    TodoComponent,
    TodoTitleComponent,
    TodoInputComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzInputModule,
    FormsModule,
    NzMessageModule,
    NzListModule,
    HttpClientModule
  ],
  exports: [TodoComponent]
})
export class TodoModule {}
