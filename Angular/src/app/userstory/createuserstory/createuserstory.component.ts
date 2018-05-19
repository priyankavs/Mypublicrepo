import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms';
import{HttpClient} from '@angular/common/http';
import{Router} from '@angular/router';

@Component({
  selector: 'app-createuserstory',
  templateUrl: './createuserstory.component.html',
  styleUrls: ['./createuserstory.component.css']
})
export class CreateuserstoryComponent implements OnInit {
  formData:FormGroup;

  constructor(private http:HttpClient,private router:Router) {

   }userstory;
    




  ngOnInit() {
    this.formData=new FormGroup({
        project_id:new FormControl('',[Validators.required]),
        story:new FormControl('',[Validators.required])
        
  
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
      onClickSubmit(userstory){
        this.http.post('http://localhost:60400/api/Userstory',userstory).subscribe(
          data=>{
            console.log('saved successfully');
            this.router.navigate(['/UserStory/show']);
          }
        );
      }
    
    }

  
