import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { AddListComponent } from './pages/add-list/add-list.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';

const routes: Routes = [
  { path: '', redirectTo:'lists', pathMatch:'full' },
  { path: 'lists', component: TaskViewComponent },
  { path: 'addList', component: AddListComponent },
  { path: 'lists/:listId', component: TaskViewComponent },
  { path: 'list/:listId/addTask', component: AddTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
