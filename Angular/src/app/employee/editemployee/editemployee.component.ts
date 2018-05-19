import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import{HttpClient} from '@angular/common/http';
import{FormGroup,FormControl,Validators} from '@angular/forms';



@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  formData:FormGroup;

  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) { }
  id=this.route.snapshot.paramMap.get('id');
employee;
  ngOnInit() {

    this.loadEmployees();

    this.formData=new FormGroup({
      employee_name:new FormControl('',[Validators.required]),
      designation:new FormControl('',[Validators.required]),
      manager_id:new FormControl('',[Validators.required]),
      contact_no:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]),
      email_id:new FormControl('',[Validators.required,,Validators.pattern('(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)')]),
      skillsets:new FormControl('',[Validators.required])



    });
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
  loadEmployees()
  {
    this.http.get(`http://localhost:60400/api/Employee/${this.id}`).subscribe(
      data=>{
      console.log(data);

    this.employee=data;
    this.formData=new FormGroup({
      employee_name:new FormControl(this.employee.employee_name,[]),
      designation:new FormControl(this.employee.designation,[]),
      manager_id:new FormControl(this.employee.manager_id,[]),
      contact_no:new FormControl(this.employee.contact_no,[]),
      email_id:new FormControl(this.employee.email_id,[]),
      skillsets:new FormControl(this.employee.skillsets,[]),


    });

      }
    );
  }

onClickSubmit(employee){
  this.http.put(`http://localhost:60400/api/Employee/${this.id}`,employee).subscribe(
    data=>{
      console.log('saved successfully');
      this.router.navigate(['/employee/show']);
    }
  );
}
}



 
