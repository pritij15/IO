import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StdFormComponent } from './components/std-form/std-form.component';
import { StdTableComponent } from './components/std-table/std-table.component';
import { ProdCardComponent } from './components/prod-card/prod-card.component';
import { ProdFormComponent } from './components/prod-form/prod-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TodoFormComponent,
    TodoListComponent,
    StdFormComponent,
    StdTableComponent,
    ProdCardComponent,
    ProdFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
