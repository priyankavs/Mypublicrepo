import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-showproject',
  templateUrl: './showproject.component.html',
  styleUrls: ['./showproject.component.css']
})
export class ShowprojectComponent implements OnInit {

  constructor(private http:HttpClient) { 
    
  }projects;

  ngOnInit() {
    this.loadProjects();
  }
  loadProjects()
  {
    this.http.get('http://localhost:60400/api/Project').subscribe(data=>
  {
    console.log(data);
    this.projects=data;
  })
  }

}
