import { Component } from '@angular/core';
import { TaskService } from './../../service/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  listId: string = ""
  constructor(private taskService: TaskService, private activeRoute :ActivatedRoute, private router: Router){}
  ngOnInit(){
    this.activeRoute.params.subscribe((params)=>{
      this.listId = params['listId']
    })
  }
  createTask(task:string){
    this.taskService.createATask(task,this.listId).subscribe(()=>{
      this.router.navigate(['/lists',this.listId])
    })
  }
}
