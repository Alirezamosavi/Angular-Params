import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { BlogComponent } from './blog/blog.component';

// i made a component to name task-detai

// then i made routing and service to task-detai

const routes: Routes = [ {
  path:'tasks',
  loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)
},
{
  path:'task/:id',
   loadChildren: () => import('./task-detail/task-detail.module').then(m => m.TaskDetailModule)
    },
{
path: '**',
redirectTo:'tasks',
pathMatch: 'full'
} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
