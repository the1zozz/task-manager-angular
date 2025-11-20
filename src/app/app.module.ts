import { NgModule } from "@angular/core";
import { App } from "./app";
import { HeaderComponent } from "./header/header.component";
import { User } from "./user/user";
import { Tasks } from "./tasks/tasks";
import { Card } from "./shared/card/card";
import { Task } from "./tasks/task/task";
import { NewTask } from "./tasks/new-task/new-task";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";
import { CommonModule } from "@angular/common";
import { TasksService } from "./tasks/tasks.service";

@NgModule({
    declarations:[App],
    bootstrap:[App],
    imports:[BrowserModule, FormsModule,Card, HeaderComponent,User,Tasks,Task,NewTask]
})
export class AppModule{}