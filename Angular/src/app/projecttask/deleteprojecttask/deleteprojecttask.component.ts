import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-deleteprojecttask',
  templateUrl: './deleteprojecttask.component.html',
  styleUrls: ['./deleteprojecttask.component.css']
})
export class DeleteprojecttaskComponent implements OnInit {
  formData: FormGroup;
 constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient) { }
  id = this.route.snapshot.paramMap.get('id')
  projecttask;
  
ngOnInit() {
  
  
  this.loadprojecttask();

  }

  

loadprojecttask(){
   
 this.http.get(`http://localhost:60400/api/projecttask/${this.id}`).subscribe(
  data => {
      console.log(data);
      this.projecttask = data;
  }
    );
  }


  onClickSubmit(){
 
 
  
  this.http.delete(`http://localhost:60400/api/projecttask/${this.id}`).subscribe(
  
    data => {
     
   console.log('deleted successfully');
    
    this.router.navigate(['/projecttask/show']);
     
 }
    );
  }
}


  
