import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoursalComponent } from './coursal/coursal.component';
import { CategoryshowComponent } from './categoryshow/categoryshow.component';
import { ProductCaseComponent } from './product-case/product-case.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoginComponent } from './login/login.component';
import { TulsiWellnessComponent } from './tulsi-wellness/tulsi-wellness.component';
import { TeaInfusionComponent } from './tea-infusion/tea-infusion.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component'
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { AuthgaurdGuard } from './authgaurd.guard';
import { UserServiceService } from './services/user-service.service';

import { HomecoComponent } from './homeco/homeco.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoursalComponent,
    CategoryshowComponent,
    ProductCaseComponent,
    LoginComponent,
    TulsiWellnessComponent,
    TeaInfusionComponent,
    RegisterComponent,
    
    HomecoComponent,
    
    
    
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule

  ],
  providers: [AuthgaurdGuard,UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
