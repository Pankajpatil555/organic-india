import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TeaInfusionComponent } from './tea-infusion/tea-infusion.component';
import { AuthgaurdGuard } from './authgaurd.guard'

import { HomecoComponent } from './homeco/homeco.component';
const routes: Routes = [
 
  {path:'login',component:LoginComponent},
  {path:'tea',component:TeaInfusionComponent},
  
  {path:'',component:HomecoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
