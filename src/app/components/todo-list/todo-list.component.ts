import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() getSkills !: Array<string>;

  constructor() { }

  ngOnInit(): void {
    console.log(this.getSkills);

  }

}
