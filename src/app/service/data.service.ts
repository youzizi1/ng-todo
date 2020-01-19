import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private taskNameSource = new BehaviorSubject<string>("");
  currentTaskName = this.taskNameSource.asObservable();

  constructor() {}

  changeTaskName(taskName: string) {
    this.taskNameSource.next(taskName);
  }
}
