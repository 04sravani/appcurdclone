import { Component, OnInit } from '@angular/core';
import { CurdsService } from '../curds.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private commomService:CurdsService) { }

  ngOnInit(): void {
  }

}
