import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import{HttpClient} from '@angular/common/http';
import{FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-edituserstory',
  templateUrl: './edituserstory.component.html',
  styleUrls: ['./edituserstory.component.css']
})
export class EdituserstoryComponent implements OnInit {
  formData:FormGroup;

  constructor( private http:HttpClient,private router:Router,private route:ActivatedRoute) { }
  id=this.route.snapshot.paramMap.get('id');
  userstory;

  ngOnInit() {

    this.loaduserstory();
    this.formData=new FormGroup({
        project_id:new FormControl('',[Validators.required]),
        story:new FormControl('',[Validators.required]),
        userstory_id:new FormControl('',[Validators.required]),
        
  
      });
      console.log(this.formData);
      this.showdropdown();
    }
    showdropdown()
    {
      this.http.get('http://localhost:60400/api/Userstory').subscribe(
        data=>{
          this.userstory=data;
        }
      );
    }
    loaduserstory()
  {
    this.http.get(`http://localhost:60400/api/Userstory/${this.id}`).subscribe(
      data=>{
      console.log(data);

    this.userstory=data;
    this.formData=new FormGroup({
      project_id:new FormControl(this.userstory.project_id,[]),
      story:new FormControl(this.userstory.story,[]),
      userstory_id:new FormControl(this.userstory.userstory_id,[])
      


    });

      }
    );
  }

onClickSubmit(userstory){
  this.http.put(`http://localhost:60400/api/Userstory/${this.id}`,userstory).subscribe(
    data=>{
      console.log('saved successfully');
      this.router.navigate(['/UserStory/show']);
    }
  );
}
}
