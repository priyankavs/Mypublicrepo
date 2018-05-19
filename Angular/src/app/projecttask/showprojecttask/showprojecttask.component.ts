import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-showprojecttask',
  templateUrl: './showprojecttask.component.html',
  styleUrls: ['./showprojecttask.component.css']
})
export class ShowprojecttaskComponent implements OnInit {

  constructor(private http:HttpClient) { 

  }
  projecttask;

  ngOnInit() {
    
    this.loadprojecttask();
  }
  loadprojecttask()
  {
    this.http.get('http://localhost:60400/api/projecttask').subscribe(
      data=>{
      console.log(data);
    this.projecttask=data;
      }
  );
  }

}
