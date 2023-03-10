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

  audio  = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/click.mp3');
  audio2 = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/clickUp.mp3')
  failure = new Audio(
    '../../../assets/Audio/success-fanfare-trumpets-6185.mp3'
  );
  success = new Audio('../../../assets/Audio/wah-wah-sad-trombone-6347.mp3');

  displayAddTaskButton: boolean = false;
  displayClickOnListDiv: boolean = true;

  ngOnInit() {
    this.taskService.getAllLists().subscribe((response) => {
      this.lists = response;
    });
    this.activatedRoute.params.subscribe((params) => {
      if (params['listId']) {
        this.listId = params['listId'];
        this.taskService.getTasks(params['listId']).subscribe((response) => {
          this.tasks = response;
          this.displayAddTaskButton = true;
          this.displayClickOnListDiv = false;
        });
      }else{
        // this.tasks = null
      }
    });
  }

  addTask() {
    this.router.navigate([`list/${this.listId}/addTask`]);
  }

  onTaskClick(task: any) {
    if (task.completed == true) {
      this.taskService.completeTask(task, false).subscribe((response) => {
        task.completed = false;
        this.audio.load();
        this.audio.play();
      });
    } else {
      this.taskService.completeTask(task, true).subscribe((response) => {
        task.completed = true;
        this.audio.load();
        this.audio.play();
      });
    }
  }
}
