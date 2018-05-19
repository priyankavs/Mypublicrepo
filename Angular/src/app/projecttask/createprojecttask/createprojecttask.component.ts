import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms';
import{HttpClient} from '@angular/common/http';
import{Router} from '@angular/router';

@Component({
  selector: 'app-createprojecttask',
  templateUrl: './createprojecttask.component.html',
  styleUrls: ['./createprojecttask.component.css']
})
export class CreateprojecttaskComponent implements OnInit {

  formData:FormGroup;

  constructor(private http:HttpClient,private router:Router) { 
    
  }projecttask;
  employees;

  ngOnInit() {
  
    this.formData=new FormGroup({
      assignedto:new FormControl('',[Validators.required]),
      taskstartdate:new FormControl('',[Validators.required]),
      taskenddate:new FormControl('',[Validators.required]),
      taskcompletion:new FormControl('',[Validators.required]),
      userstory_id:new FormControl('',[Validators.required])
      });
    console.log(this.formData);
   
    this.showdropdown();
  }
  showdropdown()
  {
    this.http.get('http://localhost:60400/api/Employee').subscribe(
      data=>{
        this.employees=data;
      }
    );
  }
 
  onClickSubmit(projecttask){
    this.http.post('http://localhost:60400/api/projecttask',projecttask).subscribe(
      data=>{
        console.log('saved successfully');
        this.router.navigate(['/projecttask/show']);
      }
    );
  }

}