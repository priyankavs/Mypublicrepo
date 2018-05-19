import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import{HttpClient} from '@angular/common/http';
import{FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-editprojecttask',
  templateUrl: './editprojecttask.component.html',
  styleUrls: ['./editprojecttask.component.css']
})
export class EditprojecttaskComponent implements OnInit {
  formData:FormGroup;

  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) { }
  id=this.route.snapshot.paramMap.get('id');
projecttask;
  ngOnInit() {

    this.loadprojecttask();

    this.formData=new FormGroup({
      assignedto:new FormControl('',[Validators.required]),
      taskstartdate:new FormControl('',[Validators.required]),
      taskenddate:new FormControl('',[Validators.required]),
      taskcompletion:new FormControl('',[Validators.required]),
      userstory_id:new FormControl('',[Validators.required]),
       });
    
    
  }
  loadprojecttask()
  {
    this.http.get(`http://localhost:60400/api/projecttask/${this.id}`).subscribe(
      data=>{
      console.log(data);

    this.projecttask=data;
    this.formData=new FormGroup({
      assignedto:new FormControl(this.projecttask.assignedto,[]),
      taskstartdate:new FormControl(this.projecttask.taskstartdate,[]),
      taskenddate:new FormControl(this.projecttask.taskenddate,[]),
      taskcompletion:new FormControl(this.projecttask.taskcompletion,[]),
      userstory_id:new FormControl(this.projecttask.userstory_id,[]),
    


    });

      }
    );
  }

onClickSubmit(projecttask){
  this.http.put(`http://localhost:60400/api/projecttask/${this.id}`,projecttask).subscribe(
    data=>{
      console.log('saved successfully');
      this.router.navigate(['/projecttask/show']);
    }
  );
}
}


 
