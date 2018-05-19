import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import{HttpClient} from '@angular/common/http';
import{FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})
export class EditprojectComponent implements OnInit {
  formData:FormGroup;

  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) { }
  id=this.route.snapshot.paramMap.get('id');
project;

  ngOnInit() {
    this.loadproject();

    this.formData=new FormGroup({
      project_name:new FormControl('',[Validators.required]),
      startdate:new FormControl('',[Validators.required]),
      enddate:new FormControl('',[Validators.required]),
      clientname:new FormControl('',[Validators.required]),
     
  });

}
loadproject()
  {
    this.http.get(`http://localhost:60400/api/project/${this.id}`).subscribe(
      data=>{
      console.log(data);

    this.project=data;
    this.formData=new FormGroup({
      project_name:new FormControl(this.project.project_name,[]),
      startdate:new FormControl(this.project.startdate,[]),
      enddate:new FormControl(this.project.enddate,[]),
      clientname:new FormControl(this.project.clientname,[]),
    


    });

      }
    );
  }

onClickSubmit(project){
  this.http.put(`http://localhost:60400/api/project/${this.id}`,project).subscribe(
    data=>{
      console.log('saved successfully');
      this.router.navigate(['/project/show']);
    }
  );
}
}
