import { Component, OnInit } from '@angular/core';

import {  ActivatedRoute } from '@angular/router';  // this for change url and need to Angular
import { TaskDetailService } from './task-detail.service'; // this is service for this component
import { Task } from '../tasks/task';  // this is interface

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
  providers: [TaskDetailService]   ///  Service
})
export class TaskDetailComponent implements OnInit {
  title = 'my-app';
  task: Task;      // this is interface

  constructor(
    private route: ActivatedRoute,  // add ActivatedRoute
    private taskDetailService: TaskDetailService  // add TaskDetailService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id; // this is snapshot params
    this.taskDetailService.getTask(id).subscribe(data => {  // this function to get new data
      this.task = data;
    });
  }

}
