import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { List } from 'src/app/Types/list.model';
import { TaskService } from './../../service/task.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss'],
})
export class AddListComponent {
  constructor(private taskService: TaskService,private route : Router,private activatedRoute: ActivatedRoute) {}

  createNewList(listInput:string) {
    if(listInput === "" || !listInput) return ;
    this.taskService.createList(listInput).subscribe((response:any) => {
      this.route.navigate(['/lists', response._id]);
    });
  }
}
