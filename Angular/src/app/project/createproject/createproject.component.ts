import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms';
import{HttpClient} from '@angular/common/http';
import{Router} from '@angular/router';


@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent implements OnInit {
  formData:FormGroup;

  constructor(private http:HttpClient,private router:Router) { 

  }project;
 

  

  

  ngOnInit() {
    this.formData=new FormGroup({
      project_name:new FormControl('',[Validators.required]),
      startdate:new FormControl('',[Validators.required]),
      enddate:new FormControl('',[Validators.required]),
      clientname:new FormControl('',[Validators.required])
  });

console.log(this.formData);
  }

onClickSubmit(project){
  this.http.post('http://localhost:60400/api/project',project).subscribe(
    data=>{
      console.log('saved successfully');
    this.router.navigate(['/project/show']);
    }
  );
}
}
