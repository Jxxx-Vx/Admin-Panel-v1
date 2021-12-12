import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nz-demo-button-danger',
  template: `<p>profile for  {{userID}}</p>


  <label>Name:</label><br> <input type="text"  value="{{userID}}"><br>
  <label>Email</label><br> <input type="text"   value="{{userID}}@gmail.com"><br><br>
  <label>Limit User</label><br> <input type="number"   value=""><br><br>

  <button nz-button nzType="primary">Submit Changes</button>
  <br>

  <button nz-button nzType="primary">Archive User Account</button>
  <br>
  <button nz-button nzType="primary" nzDanger>Delete User Account</button>
  `,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userID: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=> this.userID = params.userID);
  }

}
