import { Component, OnInit } from '@angular/core';
import { ITask, Level } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit{

// refactor lista tasks

  task1: ITask = {
    title: 'Task 1',
    description: 'this is the first task',
    complete: true,
    level: Level.Blocking
  }
  task2: ITask = {
    title: 'Task 2',
    description: 'this is the second task',
    complete: false,
    level: Level.Info
  }
  task3: ITask = {
    title: 'Task 3',
    description: 'this is the last task',
    complete: true,
    level: Level.Urgent
  }

  ngOnInit(){

  }
 
  deleteTasks(task:ITask){
    // sustituir por splice function to delete
    alert("the task " + task.title + " is going to be deleted.")
  }
}
