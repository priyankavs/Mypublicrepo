import { NgModule } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { UserstoryComponent } from './userstory/userstory.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShowEmployeesComponent } from './employee/show-employees/show-employees.component';
import { ShowprojectComponent } from './project/showproject/showproject.component';
import { ShowuserstoryComponent } from './userstory/showuserstory/showuserstory.component';
import { CreateemployeeComponent } from './employee/createemployee/createemployee.component';
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

const routes:Routes=[
  {
    path:'home',
    component:HomeComponent,
    children:[]
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'employee',
    component:EmployeeComponent,
    children:[
      {
        path:'create',
        component:CreateemployeeComponent,
        children:[]
      },
      {
        path:'edit/:id',
        component:EditemployeeComponent,
        children:[]
      },
      {
        path:'delete/:id',
        component:DeleteemployeeComponent,
        children:[]
      },
      {
        path:'show',
        component:ShowEmployeesComponent,
        children:[]
      },
      {
        path:'',
        redirectTo:'/employee/show',
        pathMatch:'full'        
      }
    ]
  },
  {
  path:'project',
  component:ProjectComponent,
  children:[
    {
      path:'create',
      component:CreateprojectComponent,
      children:[]
    },
    {
      path:'edit/:id',
      component:EditprojectComponent,
      children:[]
    },
    {
      path:'delete/:id',
      component:DeleteprojectComponent,
      children:[]
    },
    {
      path:'show',
      component:ShowprojectComponent,
      children:[]
    },
    {
      path:'',
  redirectTo:'/project/show',
  pathMatch:'full'
    }

  ]
},
{
  path:'UserStory',
  component:UserstoryComponent,
  children:[
    {
      path:'create',
      component:CreateuserstoryComponent,
      children:[]
    },
    {
      path:'edit/:id',
      component:EdituserstoryComponent,
      children:[]
    },
    {
      path:'delete/:id',
      component:DeleteuserstoryComponent,
      children:[]
    },
    {
      path:'show',
      component:ShowuserstoryComponent,
      children:[]
    },
    {
      path:'',
  redirectTo:'/UserStory/show',
  pathMatch:'full'
    }


  ]

},
{
path:'projecttask',
component:ProjecttaskComponent,
children:[
  {
    path:'create',
    component:CreateprojecttaskComponent,
    children:[]
  },
  {
    path:'edit/:id',
    component:EditprojecttaskComponent,
    children:[]
  },
  {
    path:'delete/:id',
    component:DeleteprojecttaskComponent,
    children:[]
  },
  {
    path:'show',
    component:ShowprojecttaskComponent,
    children:[]
  },
  {
    path:'',
    redirectTo:'/projecttask/show',
    pathMatch:'full'        
  }
]
},
{
  path:'managercomment',
  component:ManagercommentComponent,
  children:[
    {
      path:'create',
      component:CreatemanagercommentComponent,
      children:[]
    },
    {
      path:'edit/:id',
      component:EditmanagercommentComponent,
      children:[]
    },
    {
      path:'delete/:id',
      component:DeletemanagercommentComponent,
      children:[]
    },
    {
      path:'show',
      component:ShowmanagercommentComponent,
      children:[]
    },
    {
      path:'',
      redirectTo:'/managercomment/show',
      pathMatch:'full'        
    }
  ]
},

 
  {
  path:'header',
  component:HeaderComponent,
  children:[]
},
{
  path:'footer',
  component:FooterComponent,
  children:[]
}
 
 
 

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
  
  declarations: []
})
export class AppRoutingModule { }
