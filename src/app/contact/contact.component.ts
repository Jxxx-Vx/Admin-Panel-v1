import { Component, OnInit } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'nz-demo-list-simple',
  template: ` <h3 [ngStyle]="{ margin: '16px 0' }">Contacts</h3>

  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  



  <nz-tabset class = "scroll">
  <div class = "scroll">
        <nz-tab nzTitle="All">
        <form class = "search" autocomplete = "off">
        <datalist id="contacts">
          <option *ngFor="let item of all" [value]="item.email" >{{item.email}}</option>
        </datalist>
        <input type="text" list = "contacts" id = "look" placeholder="Search.." #look>
        <button type="submit" (click) = "contact(look.value)"><i class="fa fa-search"></i></button>
        </form>
        <br>
        <ul nz-list [nzDataSource]="all" nzBordered nzSize="large">
      <li nz-list-item *ngFor="let item of all" nzNoFlex>
        <ul nz-list-item-actions>
        <nz-list-item-action>
        <a routerLink = "/contact/{{item._id}}">Edit Profile</a>
      </nz-list-item-action>
    </ul>
    <nz-avatar nzSize="small" nzIcon="user" class = "avatar" type></nz-avatar>
    {{item.email}}
      </li>
    </ul>
  </nz-tab> 
  </div>
  /** comments for code block  8 - 20. The code is for the all tab for the contacts page. line 11 creates a loop that will render all the data from the data array*/
  /** comments for code block  8 - 20. line 17 will render the elements in item in a ul or unordered list */
      <nz-tab nzTitle="Manager">
      <form class = "search" autocomplete = "off">
      <datalist id="contacts">
        <option *ngFor="let item of managers" [value]="item.email" >{{item.email}}</option>
      </datalist>
      <input type="text" list = "contacts" id = "look" placeholder="Search.." #look>
      <button type="submit" (click) = "contact(look.value)"><i class="fa fa-search"></i></button>
      </form>
      <br>
      <ul nz-list [nzDataSource]="managers" nzBordered nzSize="large">
      <li nz-list-item *ngFor="let item of managers" nzNoFlex> 
        <ul nz-list-item-actions ng-init = "itemArg = {item}">
        <nz-list-item-action>
          <a routerLink = "/contact/{{item._id}}">Edit Profile</a>
        </nz-list-item-action>
      </ul>
      <nz-avatar nzSize="small" nzIcon="user" class = "avatar" type></nz-avatar>
      {{item.email}}
      </li>
    </ul></nz-tab>
    /** comments for code block  24 - 33. The code is for the managers tab for the contacts page. line 31 creates a loop that will render all the data from the data array*/
  /** comments for code block  24 - 33. for examples on the ng zorro component that was used, check out their page  */
   /** https://ng.ant.design/components/tabs/en */
      <nz-tab nzTitle="Coaches">
      <form class = "search" autocomplete = "off">
      <datalist id="contacts">
        <option *ngFor="let item of coaches" [value]="item.email" >{{item.email}}</option>
      </datalist>
      <input type="text" list = "contacts" id = "look" placeholder="Search.." #look>
      <button type="submit" (click) = "contact(look.value)"><i class="fa fa-search"></i></button>
      </form>
      <br>
    <ul nz-list [nzDataSource]="coaches" nzBordered nzSize="large">
    <li nz-list-item *ngFor="let item of coaches" nzNoFlex>
      <ul nz-list-item-actions>
      <nz-list-item-action>
      <a routerLink = "/contact/{{item._id}}">Edit Profile</a>
    </nz-list-item-action>
  </ul>
  <nz-avatar nzSize="small" nzIcon="user" class = "avatar" type></nz-avatar>
  {{item.email}}
    </li>
  </ul></nz-tab>
  /** this is the coaches tab. The anchor tag is necessary for routing to the profiles page*/
  /** when you click on it, it will send you to the */
      <nz-tab nzTitle="Advisors">
      <form class = "search" autocomplete = "off">
      <datalist id="contacts">
        <option *ngFor="let item of advisors" [value]="item.email" >{{item.email}}</option>
      </datalist>
      <input type="text" list = "contacts" id = "look" placeholder="Search.." #look>
      <button type="submit" (click) = "contact(look.value)"><i class="fa fa-search"></i></button>
      </form>
      <br>
      
      <ul nz-list [nzDataSource]="advisors" nzBordered nzSize="large">
      <li nz-list-item *ngFor="let item of advisors" nzNoFlex>
        <ul nz-list-item-actions>
        <nz-list-item-action>
        <a routerLink = "/contact/{{item._id}}">Edit Profile</a>
      </nz-list-item-action>
    </ul>
    <nz-avatar nzSize="small" nzIcon="user" class = "avatar" type></nz-avatar>
    {{item.email}}
      </li>
    </ul></nz-tab>
    /** this is the advisors tab */
      <nz-tab nzTitle="Specialist">
      <form class = "search" autocomplete = "off">
      <datalist id="contacts">
        <option *ngFor="let item of specialists" [value]="item.email" >{{item.email}}</option>
      </datalist>
      <input type="text" list = "contacts" id = "look" placeholder="Search.." #look>
      <button type="submit" (click) = "contact(look.value)"><i class="fa fa-search"></i></button>
      </form>
      <br>
      
    <ul nz-list [nzDataSource]="specialists" nzBordered nzSize="large">
      
    <li nz-list-item *ngFor="let item of specialists" nzNoFlex>
      <ul nz-list-item-actions>
      <nz-list-item-action>
      <a routerLink = "/contact/{{item._id}}">Edit Profile</a>
    </nz-list-item-action>
  </ul>
  <nz-avatar nzSize="small" nzIcon="user" class = "avatar" type></nz-avatar>
  {{item.email}}
    </li>
  </ul></nz-tab>
  /** this is the specialist tab */
      <nz-tab nzTitle="User">
      <form class = "search" autocomplete = "off">
      <datalist id="contacts">
        <option *ngFor="let item of clients" [value]="item.email" >{{item.email}}</option>
      </datalist>
      <input type="text" list = "contacts" id = "look" placeholder="Search.." #look>
      <button type="submit" (click) = "contact(look.value)"><i class="fa fa-search"></i></button>
      </form>
      <br>
      <ul nz-list [nzDataSource]="clients" nzBordered nzSize="large">
    <li nz-list-item *ngFor="let item of clients" nzNoFlex>
      <ul nz-list-item-actions>
        <nz-list-item-action>
          <a routerLink = "/contact/{{item._id}}">Edit Profile</a>
        </nz-list-item-action>
      </ul>
      <nz-avatar nzSize="small" nzIcon="user" class = "avatar" type></nz-avatar>
      {{item.email}}
    </li>
  </ul>
  </nz-tab>
  /** this is the User tab */
 
  <nz-tab nzTitle="Admin">
  <form class = "search" autocomplete = "off">
  <datalist id="contacts">
    <option *ngFor="let item of admins" [value]="item.email" >{{item.email}}</option>
  </datalist>
  <input type="text" list = "contacts" id = "look" placeholder="Search.." #look>
  <button type="submit" (click) = "contact(look.value)"><i class="fa fa-search"></i></button>
  </form>
  <br>
      <ul nz-list [nzDataSource]="admins" nzBordered nzSize="large">
    <li nz-list-item *ngFor="let item of admins" nzNoFlex>
      <ul nz-list-item-actions>
      <nz-list-item-action>
      <a routerLink = "/contact/{{item._id}}">Edit Profile</a>
    </nz-list-item-action>
  </ul>
  <nz-avatar nzSize="small" nzIcon="user" class = "avatar" type></nz-avatar>
  {{item.email}}
    </li>
  </ul>
  </nz-tab>
  /** this is the admin tab */

  
    </nz-tabset>
    <br><br><br>
    <span style = "font-size:18px; padding-right:10px;">Add new users</span>
    <button class="icon-btn add-btn" (click) = "add3()">
    <div class="add-icon"></div>
    <div class="btn-txt">ADD</div>
    </button>
    <br><br><br>
    
  
    <form style = "font-size: 18px;">
      <input type={{add1}} id="msg"  placeholder = "Name" #name>
      <input type={{add1}} id="msg"  placeholder = "Email" #email>
      <input type={{add1}} id="msg"  placeholder = "Password" #password>
      <input type={{add1}} id="msg"  placeholder = "Level" #level>
      <input type={{add1}} id="msg"  placeholder = "limitClient" #limitClient>
      <input type={{add2}} style="border-radius: 15px; outline: 0; padding: 0px 25px; background-color:rgb(161, 233, 113); margin-left:30px;" (click) = "add(name.value, email.value, password.value, level.value, limitClient.value)">
    </form>
  
  `,
  styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit {
  all: any[] = [];
  admins: any[] = [];
  managers: any[] = [];
  specialists: any[] = [];
  advisors: any[] = [];
  coaches: any[] = [];
  clients: any[] = [];

  match: any;

  

  add1 = "hidden";
  add2 = "hidden";


  contact(email: any){
    for(var i = 0; i < this.all.length; i++){
      if(email == this.all[i].email)
      {
        this.match = this.all[i]
      }
    }
    //console.log("This is the value:", this.match);
    this.router.navigate(['/contact/',this.match._id]);
    
  }

  add3(){
    this.add1 = "text";
    this.add2 = "submit";
  }

  add(name: any, email: any, password: any, level: any, limitClient: any ){
    this.http.post(`http://localhost:3012/addUser`, {"name": name, "email": email, "password": password, "level": level, "limitClient": limitClient}).toPromise().then(data =>{
      console.log('Adding user');
    });
    console.log('Adding user: ',name, email, password, level, limitClient);
    window.location.reload();
  }



  constructor(public msg: NzMessageService, private http: HttpClient, private router: Router) { 
    let url0 = `http://localhost:3012/see-user/all`
    this.http.get<any[]>(url0).toPromise().then(data => {
      this.all = data;
    });


    let url = `http://localhost:3012/see-user/admin`;
    this.http.get<any[]>(url).toPromise().then(data => {
      this.admins = data;
    });
    

    let url1 = `http://localhost:3012/see-user/manager`;
    this.http.get<any[]>(url1).toPromise().then(data => {
      this.managers = data;
    });
   

    let url2 = `http://localhost:3012/see-user/specialist`;
    this.http.get<any[]>(url2).toPromise().then(data => {
      this.specialists = data;
    });
   
    let url3 = `http://localhost:3012/see-user/advisor`;
    this.http.get<any[]>(url3).toPromise().then(data => {
      this.advisors = data;
    });

    let url4 = `http://localhost:3012/see-user/coach`;
    this.http.get<any[]>(url4).toPromise().then(data => {
      this.coaches = data;
    });

    let url5 = `http://localhost:3012/see-user/user`;
    this.http.get<any[]>(url5).toPromise().then(data => {
      this.clients = data;
    });
   
  }

  ngOnInit(): void {
  }

}