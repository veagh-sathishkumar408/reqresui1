import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListusersComponent } from './listusers/listusers.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  {path: 'listusers',component:ListusersComponent },
  {path: 'create',component:CreateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
