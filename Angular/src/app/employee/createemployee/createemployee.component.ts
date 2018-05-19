import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms';
import{HttpClient} from '@angular/common/http';
import{Router} from '@angular/router';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
  formData:FormGroup;

  constructor(private http:HttpClient,private router:Router) { 
    
  }employee;

  ngOnInit() {
    //this.onClickSubmit(this.employee);
    this.formData=new FormGroup({
      employee_name:new FormControl('',[Validators.required]),
      designation:new FormControl('',[Validators.required]),
      manager_id:new FormControl('',[Validators.required]),
      contact_no:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]),
      email_id:new FormControl('',[Validators.required,Validators.pattern('(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)')]),
      skillsets:new FormControl('',[Validators.required])  


    

    });
    console.log(this.formData);
   this.showdropdown();
  }
  showdropdown()
  {
    this.http.get('http://localhost:60400/api/Employee').subscribe(
      data=>{
        this.employee=data;
      }
    );
  }
 
  onClickSubmit(employee){
    this.http.post('http://localhost:60400/api/Employee',employee).subscribe(
      data=>{
        console.log('saved successfully');
        this.router.navigate(['/employee/show']);
      }
    );
  }

}
