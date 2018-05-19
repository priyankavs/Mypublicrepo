import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import{HttpClient} from '@angular/common/http';
import{FormGroup,FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-editmanagercomment',
  templateUrl: './editmanagercomment.component.html',
  styleUrls: ['./editmanagercomment.component.css']
})
export class EditmanagercommentComponent implements OnInit {

  formData:FormGroup;

  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) { }
  id=this.route.snapshot.paramMap.get('id');
managercomment;
  ngOnInit() {

    this.loadmanagercomment();

    this.formData=new FormGroup({
      comments:new FormControl('',[Validators.required]),
      projecttask_id:new FormControl('',[Validators.required]),
     

    });
    
     }
  loadmanagercomment()
  {
    this.http.get(`http://localhost:60400/api/ManagerComment/${this.id}`).subscribe(
      data=>{
      console.log(data);

    this.managercomment=data;
    this.formData=new FormGroup({
      comments:new FormControl(this.managercomment.comments,[Validators.required]),
      projecttask_id:new FormControl(this.managercomment.projecttask_id,[Validators.required]),
   });

      }
    );
  }

onClickSubmit(managercomment){
  this.http.put(`http://localhost:60400/api/ManagerComment/${this.id}`,managercomment).subscribe(
    data=>{
      console.log('saved successfully');
      this.router.navigate(['/managercomment/show']);
    }
  );
}
}
