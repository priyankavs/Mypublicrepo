import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-showuserstory',
  templateUrl: './showuserstory.component.html',
  styleUrls: ['./showuserstory.component.css']
})
export class ShowuserstoryComponent implements OnInit {

  constructor(private http:HttpClient) { }
  userstories;

  ngOnInit() {
    this.loaduserstories();
  }
loaduserstories()
{
  this.http.get('http://localhost:60400/api/Userstory').subscribe(data=>
  {

  console.log(data);
this.userstories=data;
}
);
}
}
 


