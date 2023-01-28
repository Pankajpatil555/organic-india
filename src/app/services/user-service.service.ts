import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
url="http://localhost:3000/userdata"
  constructor(private http:HttpClient) { }
postuser(data:any){
return this.http.post(this.url,data)
}

getUser(){
  return this.http.get(this.url)
}

isadmin():boolean{
  return true
}



}
