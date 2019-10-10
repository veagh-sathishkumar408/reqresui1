import { Component, OnInit } from '@angular/core';
import { CommonService } from "src/app/common.service";


@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})

export class ListusersComponent implements OnInit {

  constructor(private sathish: CommonService) { }
  show:any;
  shows:any;
  
  ngOnInit() { 
   this.getUser();
  }
  
  getUser() {
    this.sathish.getUsers().subscribe(
       
      (response: any) => {
        console.log(response);
        this.shows=response;
      }
    );
  }
}
