import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { TodoData } from "./type/todo";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  private url: string =
    "https://www.fastmock.site/mock/630768a82b1e71435d970c4620fee4aa/todo/todo";

  constructor(private http: HttpClient) {}

  getTodoList(): Observable<TodoData> {
    return this.http.get<TodoData>(this.url);
  }
}
