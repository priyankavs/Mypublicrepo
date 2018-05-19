import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-deletemanagercomment',
  templateUrl: './deletemanagercomment.component.html',
  styleUrls: ['./deletemanagercomment.component.css']
})
export class DeletemanagercommentComponent implements OnInit {
  formData: FormGroup;
  constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient) { }
   id = this.route.snapshot.paramMap.get('id')
   managercomment;
   
 ngOnInit() {
    this.formData=new FormGroup({
     comments: new FormControl('',[]),
     projecttask_id: new FormControl('',[]),
    
    });
 
   
   this.loadmanagercomment();
 
   }
 
   
 
 loadmanagercomment(){
    
  this.http.get(`http://localhost:60400/api/ManagerComment/${this.id}`).subscribe(
   data => {
       console.log(data);
       this.managercomment= data;
   }
     );
   }
 
 
   onClickSubmit(){
   
   this.http.delete(`http://localhost:60400/api/ManagerComment/${this.id}`).subscribe(
   
     data => {
      
    console.log('deleted successfully');
     
     this.router.navigate(['/managercomment/show']);
      
  }
     );
   }
 }
