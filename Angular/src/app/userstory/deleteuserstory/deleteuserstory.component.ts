import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-deleteuserstory',
  templateUrl: './deleteuserstory.component.html',
  styleUrls: ['./deleteuserstory.component.css']
})
export class DeleteuserstoryComponent implements OnInit {
  formData: FormGroup;
 constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient) { }
  id = this.route.snapshot.paramMap.get('id')
  userstory;
  
ngOnInit() {
   this.formData=new FormGroup({
    story: new FormControl('',[]),
    project_id: new FormControl('',[]),
   
 
   });
this.loaduserstory();

  }
loaduserstory(){
   
 this.http.get(`http://localhost:60400/api/Userstory/${this.id}`).subscribe(
  data => {
      console.log(data);
      this.userstory = data;
  }
    );
  }
onClickSubmit(userstory){
 
   console.log(userstory);
  
  this.http.delete(`http://localhost:60400/api/Userstory/${this.id}`).subscribe(
  
    data => {
     
   console.log('deleted successfully');
    
    this.router.navigate(['/UserStory/show']);
     
 }
    );
  }
}

 
