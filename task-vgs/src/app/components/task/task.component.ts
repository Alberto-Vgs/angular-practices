import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() task: ITask | undefined;
  @Output() deleteTask: EventEmitter<ITask> = new EventEmitter<ITask>
  
  delete(){
    console.log("eliminar tarea",this.task?.title);
    this.deleteTask.emit(this.task);// se envia al padre al task a eliminar
  }
}
