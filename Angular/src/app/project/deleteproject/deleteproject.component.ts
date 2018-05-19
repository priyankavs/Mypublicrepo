import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-deleteproject',
  templateUrl: './deleteproject.component.html',
  styleUrls: ['./deleteproject.component.css']
})
export class DeleteprojectComponent implements OnInit {
  formData: FormGroup;

  constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient) { }
  id = this.route.snapshot.paramMap.get('id')
  project;

  ngOnInit() {
    this.formData=new FormGroup({
      project_name: new FormControl('',[]),
      startdate: new FormControl('',[]),
      enddate: new FormControl('',[]),
      clientname: new FormControl('',[]),
    });

  
    this.loadproject();
  
    }
  
    
  
  loadproject(){
     
   this.http.get(`http://localhost:60400/api/project/${this.id}`).subscribe(
    data => {
        console.log(data);
        this.project = data;
    }
      );
    }
  
  
    onClickSubmit(project){
   
     console.log(project);
    
    this.http.delete(`http://localhost:60400/api/project/${this.id}`).subscribe(
    
      data => {
       
     console.log('deleted successfully');
      
      this.router.navigate(['/project/show']);
       
   }
      );
    }
  }
  
   
  