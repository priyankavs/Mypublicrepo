import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { UserstoryComponent } from './userstory/userstory.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShowEmployeesComponent } from './employee/show-employees/show-employees.component';
import { ShowprojectComponent } from './project/showproject/showproject.component';
import { ShowuserstoryComponent } from './userstory/showuserstory/showuserstory.component';
import { CreateemployeeComponent } from './employee/createemployee/createemployee.component';
import{ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CreateprojectComponent } from './project/createproject/createproject.component';
import { CreateuserstoryComponent } from './userstory/createuserstory/createuserstory.component';
import { EditemployeeComponent } from './employee/editemployee/editemployee.component';
import { EditprojectComponent } from './project/editproject/editproject.component';
import { EdituserstoryComponent } from './userstory/edituserstory/edituserstory.component';
import { DeleteemployeeComponent } from './employee/deleteemployee/deleteemployee.component';
import { DeleteprojectComponent } from './project/deleteproject/deleteproject.component';
import { DeleteuserstoryComponent } from './userstory/deleteuserstory/deleteuserstory.component';
import { ProjecttaskComponent } from './projecttask/projecttask.component';
import { ShowprojecttaskComponent } from './projecttask/showprojecttask/showprojecttask.component';
import { CreateprojecttaskComponent } from './projecttask/createprojecttask/createprojecttask.component';
import { EditprojecttaskComponent } from './projecttask/editprojecttask/editprojecttask.component';
import { DeleteprojecttaskComponent } from './projecttask/deleteprojecttask/deleteprojecttask.component';
import { ManagercommentComponent } from './managercomment/managercomment.component';
import { ShowmanagercommentComponent } from './managercomment/showmanagercomment/showmanagercomment.component';
import { CreatemanagercommentComponent } from './managercomment/createmanagercomment/createmanagercomment.component';
import { EditmanagercommentComponent } from './managercomment/editmanagercomment/editmanagercomment.component';
import { DeletemanagercommentComponent } from './managercomment/deletemanagercomment/deletemanagercomment.component';
import{EmployeeService} from './services/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    ProjectComponent,
    UserstoryComponent,
    HeaderComponent,
    FooterComponent,
    ShowEmployeesComponent,
    ShowprojectComponent,
    ShowuserstoryComponent,
    CreateemployeeComponent,
    CreateprojectComponent,
    CreateuserstoryComponent,
    EditemployeeComponent,
    EditprojectComponent,
    EdituserstoryComponent,
    DeleteemployeeComponent,
    DeleteprojectComponent,
    DeleteuserstoryComponent,
    ProjecttaskComponent,
    ShowprojecttaskComponent,
    CreateprojecttaskComponent,
    EditprojecttaskComponent,
    DeleteprojecttaskComponent,
    ManagercommentComponent,
    ShowmanagercommentComponent,
    CreatemanagercommentComponent,
    EditmanagercommentComponent,
    DeletemanagercommentComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,
    HttpClientModule,ReactiveFormsModule,FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
