import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoursalComponent } from './coursal/coursal.component';
import { CategoryshowComponent } from './categoryshow/categoryshow.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoursalComponent,
    CategoryshowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
