import { Component, OnInit } from "@angular/core";
import { DataService } from "../../service/data.service";
import { TodoService } from "../todo.service";
import { Todo } from "../type/todo";
import { NzMessageService } from "ng-zorro-antd";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"]
})
export class TodoListComponent implements OnInit {
  taskList: Todo[] = [];
  loading: boolean = false;

  constructor(
    private data: DataService,
    private readonly todoService: TodoService,
    private readonly message: NzMessageService
  ) {}

  ngOnInit() {
    this.initTaskList();
    this.data.currentTaskName.subscribe(taskName => {
      if (taskName) {
        this.taskList = [...this.taskList, { task: taskName }];
      }
    });
  }

  deleteTask(task) {
    this.taskList = this.taskList.filter(item => item.task !== task);
  }

  initTaskList() {
    this.loading = true;
    this.todoService.getTodoList().subscribe(
      data => {
        this.taskList = data.data;
      },
      err => {
        this.message.error(err);
      },
      () => {
        this.loading = false;
      }
    );
  }
}
