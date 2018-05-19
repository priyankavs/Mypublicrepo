import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms';
import{HttpClient} from '@angular/common/http';
import{Router} from '@angular/router';

@Component({
  selector: 'app-createmanagercomment',
  templateUrl: './createmanagercomment.component.html',
  styleUrls: ['./createmanagercomment.component.css']
})
export class CreatemanagercommentComponent implements OnInit {

  formData:FormGroup;

  constructor(private http:HttpClient,private router:Router) { 
    
  }managercomment;

  ngOnInit() {
    
    this.formData=new FormGroup({
      comments:new FormControl('',[Validators.required]),
      projecttask_id:new FormControl('',[Validators.required]),
    });
    console.log(this.formData);
   
  }
 
  onClickSubmit(managercomment){
    this.http.post('http://localhost:60400/api/ManagerComment',managercomment).subscribe(
      data=>{
        console.log('saved successfully');
        this.router.navigate(['/managercomment/show']);
      }
    );
  }

}

