import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurdsService {
  postId:any;
  constructor(private _http:HttpClient) { 

  }
  userAdded = new Subject();
  createUser(f:any){
    console.log(f.value)
        return this._http.post<Article>('http://localhost:3000/employess',f.value);
        

  }

  
  informChild(){
    this.userAdded.next();
  }
  getusers(){
    return this._http.get<Article>('http://localhost:3000/employe.json');
  }
  deleteuser(p:any){
    return this._http.delete<Article>("http://localhost:3000/employe.json"+p.id)
  }
}


interface Article {
 
  id: number
      firstName: string,
      lastName: string
}