import { Injectable } from '@angular/core';

  //there are http to change url
  import { Observable } from 'rxjs';
  import { HttpClient } from '@angular/common/http';
  import { Task } from '../tasks/task';   // add interface 

@Injectable({
  providedIn: 'root'
})
export class TaskDetailService {

  //  the constructor is for make url
  constructor(private http: HttpClient) { }

  // this is for get new data in task-detail of page
  getTask(id: string): Observable<Task> {
    return this.http.get<Task>(`api/task/${id}`);  // this is api to get data from backend
  }
}
