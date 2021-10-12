import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ToDo } from './models/ToDo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'todolistfrontend';
  todos: ToDo [] = [];

  constructor(private todoService: TodoService){
  }

  ngOnInit(){
    this.getTodos();
  }

  public getTodos(){
    this.todoService.getAllTodos().subscribe(
      (data) => {
        this.todos = data;
      },
      (error) => {
        console.log(error)
        this.todos = [];
      }
    );
  }

}
