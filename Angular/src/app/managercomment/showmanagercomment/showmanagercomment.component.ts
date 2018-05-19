import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-showmanagercomment',
  templateUrl: './showmanagercomment.component.html',
  styleUrls: ['./showmanagercomment.component.css']
})
export class ShowmanagercommentComponent implements OnInit {

  constructor(private http:HttpClient) { 

  }
  managercomment;

  ngOnInit() {
    
    this.loadmanagercomment();
  }
  loadmanagercomment()
  {
    this.http.get('http://localhost:60400/api/ManagerComment').subscribe(
      data=>{
      console.log(data);

    this.managercomment=data;
      }
  );
  }

}
