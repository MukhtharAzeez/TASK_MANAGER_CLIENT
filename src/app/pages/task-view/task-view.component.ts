import { Component } from '@angular/core';
import { TaskService } from './../../service/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent {
  constructor(
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  lists: any = [];
  tasks: any = [];
  listId: string = '';
  displayAddTaskButton:boolean = false;
  ngOnInit() {
    this.taskService.getAllLists().subscribe((response) => {
      this.lists = response;
    });
    this.activatedRoute.params.subscribe((params) => {
      if (params['listId']) {
        this.listId = params['listId'];
        this.taskService.getTasks(params['listId']).subscribe((response) => {
          this.tasks = response;
          this.displayAddTaskButton = true
        });
      }
    });
  }

  addTask(){
    this.router.navigate([`list/${this.listId}/addTask`]);
  }
}
