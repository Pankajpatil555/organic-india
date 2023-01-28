import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {} 
  ngOnInit(): void {
  }
 loginform=new FormGroup({
  user:new FormControl('',[Validators.required]),
  password:new FormControl('')
  
 })
 loginuser(){
  console.warn(this.loginform);
  
 }
 get userx(){
  return this.loginform.get('user')
 }
 get pass(){
  return this.loginform.get('password')
 }
}
