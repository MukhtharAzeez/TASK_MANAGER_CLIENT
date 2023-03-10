import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private webRequests: WebRequestService) {}

  createList(title: string) {
    return this.webRequests.post('lists', { title });
  }

  getAllLists() {
    return this.webRequests.get('lists');
  }

  getTasks(listId:string){
    return this.webRequests.get(`lists/${listId}/tasks`)
  }

  createATask(task:string, listId:string){
    return this.webRequests.post(`lists/${listId}/tasks`,{listId:listId, title:task});
  }

  completeTask(task:any,completed:boolean){
    return this.webRequests.patch('lists/tasks/update',{taskId:task._id,title:task.title,completed});
  }
}
