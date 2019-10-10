import { Component, OnInit } from '@angular/core';
import { CommonService } from "src/app/common.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  users: any[] = [];

  user = {
    id: "",
    email: "",
    first_name: "",
    last_name: "",
    avatar: ""

  }

  responseData: any = {
    id: "",
    email: "",
    first_name: "",
    last_name: "",
    avatar: ""

  };
  

  ngOnInit() {


  }

  constructor(public createService: CommonService) {

    //this.createService.getUsers1().subscribe(users => { this.users = users });
  }

  /*onSubmit(){
     console.log(this.user);
    
     this.createService.AddUser(this.user).subscribe(user=>{this.users.unshift(this.user)})
   }*/

  onClickSubmit() {

    console.log(this.user);
    this.createService.Add(this.user).subscribe(
      (response: any) => {
        console.log(response);
        
        this.responseData = response;
        console.log(this.users);
      }, error => {
        console.log(error);
      }
    );
  }
}
