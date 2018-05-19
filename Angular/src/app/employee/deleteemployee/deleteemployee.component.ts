import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
selector: 'app-deleteemployee',
templateUrl: './deleteemployee.component.html',
 styleUrls: ['./deleteemployee.component.css']
})


export class DeleteemployeeComponent implements OnInit {

 formData: FormGroup;
 constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient) { }
  id = this.route.snapshot.paramMap.get('id')
  employee;
  
ngOnInit() {
   this.formData=new FormGroup({
    employee_name: new FormControl('',[]),
    designation: new FormControl('',[]),
    manager_id: new FormControl('',[]),
    contact_no: new FormControl('',[]),
    email_id: new FormControl('',[]),
    skillsets: new FormControl('',[])
 
   });

  
  this.loadEmployee();

  }

  

loadEmployee(){
   
 this.http.get(`http://localhost:60400/api/Employee/${this.id}`).subscribe(
  data => {
      console.log(data);
      this.employee = data;
  }
    );
  }


  onClickSubmit(){
  
  this.http.delete(`http://localhost:60400/api/Employee/${this.id}`).subscribe(
  
    data => {
     
   console.log('deleted successfully');
    
    this.router.navigate(['/employee/show']);
     
 }
    );
  }
}



