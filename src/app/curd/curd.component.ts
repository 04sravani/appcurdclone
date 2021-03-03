import { Component, OnInit } from '@angular/core';
import { CurdsService } from '../curds.service';

@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.css']
})
export class CurdComponent implements OnInit {
   result:any
  constructor( private commomService:CurdsService) { 
  }

  ngOnInit(): void {
    this.commomService.getusers().subscribe((res:any)=>{
      console.log(res)
      this.result=res
      
    })
  }

  addUsers(f:any){
  
    this.commomService.createUser(f).subscribe((response)=>{
      console.log(response)    
    })
  }
  deleteUser(p:any){
    this.commomService.deleteuser(p).subscribe((data)=>{
      console.log(data)
    })
  }
  editUsers(p:any){}
}
