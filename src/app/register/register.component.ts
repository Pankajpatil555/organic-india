import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
import {UserServiceService} from '../services/user-service.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userdata:UserServiceService) { }

  ngOnInit(): void {
  }
 registerform=new FormGroup({
  userName:new FormControl('',[Validators.required]),
  email:new FormControl('' ,[Validators.required ,Validators.email]),
  'course': new FormControl('Angular',[Validators.required]),
      
      
    

      addressDetails:new FormGroup({
      paramentAddress: new FormControl('',[Validators.required]),
      pinCode: new FormControl('',[Validators.required,Validators.maxLength(6),Validators.minLength(6)])
    })


 })

 registeruser(data:any){
  this.userdata.postuser(data).subscribe((data)=>{
    console.warn(data);
    
  })
   
 }
 users:any=[]
 showUser(){
  this.userdata.getUser().subscribe((data)=>{
    
    this.users=data
  })
 }

}
