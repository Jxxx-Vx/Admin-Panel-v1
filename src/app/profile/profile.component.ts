import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'nz-demo-button-danger',
  template: `
 {{edit()}}
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <p class = "profile">Profile for  {{match.name}}</p>

<div class = "container">
    <div class="card">
    <form></form>
        <div class="info"> <span>Edit form</span> <button id="savebutton" (click) = "edit()">edit</button> </div>
        <div class="forms">
            <div class="inputs"> <label>Name:</label> <input type="text" value="{{match.name}}" name = "name" #name></div>
            <div class="inputs"> <label>Email</label> <input type="text" value="{{match.email}}" name = "email" #email> </div>
            <div class="inputs"> <label>Level</label> <input type="text" value="{{match.level}}" name = "level" #level> </div>
            <div class="inputs"> <label>Password</label> <input type="text" value="{{match.password}}" name = "password" #password> </div>
            <div class="inputs"> <label>Limit User</label> <input type="number" value="{{match.limitClient}}" name = "limit" #limit> </div>
            <div class = "center">
              <button class = "edit"(click) = "edit1(name.value, email.value, level.value, password.value, limit.value)" >Submit Changes</button>
              <br>
              <br>
            
              <button class = "archive" (click) = "archive()" >Archive User Account</button>
              <br>
              <br>
              <button class ="delete" title="Delete User" style = "font-size:30px;"(click) = "delete()"><i class="fa fa-trash"></i></button>
              
             </div>
             <br>
        </div>
    </div>
  </div>
  `,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userID: any;
  inputs = document.querySelectorAll('input[type="text"]');
  all: any[] = [];

  match: any;

  

  edit(){
    for(var i = 0; i < this.all.length; i++){
      if(this.userID == this.all[i]._id)
      {
        this.match = this.all[i]
      }
    }
  }
  edit1(name: any, email: any, level: any, password: any, limit: any){
    this.http.post(`http://localhost:3012/editUser`, {"_id": this.match._id, "name": name, "email": email, "password": password, "level": level, "limitClient": limit}).toPromise().then(data =>{
      console.log('Edit user');
    });
    console.log(this.match);
    window.location.reload();
  }

  archive(){
    this.http.post(`http://localhost:3012/see-user/archive`, {"_id": this.match._id}).toPromise().then(data =>{
      console.log('Archiving user');
    });
    console.log('Archiving user, id = ', this.match._id);
    window.location.reload();
  }

  delete(){
    this.http.post(`http://localhost:3012/deleteUser`, {"_id": this.match._id}).toPromise().then(data =>{
      console.log('Deleting user');
    });
    console.log('Deleting user, id = ', this.match._id);
    window.location.reload();
  }

  constructor(private route: ActivatedRoute, private http: HttpClient) { 
  }// the constructor inializes the activateRoute a module in angular that will allow for user created routes like /contacts/qwer and such

  ngOnInit(): void {
    let url0 = `http://localhost:3012/see-user/all`
    this.http.get<any[]>(url0).toPromise().then(data => {
      this.all = data;
    });
    this.route.params.subscribe(params=> {this.userID = params.userID;
    });//this piece of code takes the input from the url and adds it to the variable userID
  }
}
