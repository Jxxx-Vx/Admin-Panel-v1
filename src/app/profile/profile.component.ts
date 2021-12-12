import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nz-demo-button-danger',
  template: `<p class = "profile">Profile for  {{userID}}</p>

<div class = "center">
 
  <br>
  <div class = "fonts">
  <label>Name:</label><br> <input type="text"  value="{{userID}}"><br>
  <label>Email</label><br> <input type="text"   value="{{userID}}@gmail.com"><br><br>
  <label>Password</label><br> <input type="text"   value="{{userID}}"><br><br>
  <label>Limit User</label><br> <input type="number"   value=""><br><br>

  <button nz-button nzType="primary">Submit Changes</button>
  <br>
  <br>

  <button nz-button nzType="primary">Archive User Account</button>
  <br>
  <br>
  <button nz-button nzType="primary" nzDanger>Delete User Account</button>
  <br>
  <br>
  <br>
  </div>

  </div>
  `,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userID: any;
  constructor(private route: ActivatedRoute) { }// the constructor inializes the activateRoute a module in angular that will allow for user created routes like /contacts/qwer and such

  ngOnInit(): void {
    this.route.params.subscribe(params=> this.userID = params.userID);//this piece of code takes the input from the url and adds it to the variable userID
  }

}
