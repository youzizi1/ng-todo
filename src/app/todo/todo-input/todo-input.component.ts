import { Component, OnInit } from "@angular/core";
import { NzMessageService } from "ng-zorro-antd";
import { DataService } from "../../service/data.service";

@Component({
  selector: "app-todo-input",
  templateUrl: "./todo-input.component.html",
  styleUrls: ["./todo-input.component.scss"]
})
export class TodoInputComponent implements OnInit {
  taskName: string = "";

  constructor(
    private readonly message: NzMessageService,
    private data: DataService
  ) {}

  ngOnInit() {}

  addTask() {
    const { taskName } = this;
    if (!taskName) {
      this.message.error(`task name can't be empty`);
      return;
    }
    this.data.changeTaskName(taskName);
    this.taskName = "";
  }
}
