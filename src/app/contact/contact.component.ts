import { Component, OnInit } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'nz-demo-list-simple',
  template: ` <h3 [ngStyle]="{ margin: '16px 0' }">Contacts</h3>
  <nz-tabset class = "scroll">
  <div class = "scroll">
        <nz-tab nzTitle="All">
        <ul nz-list [nzDataSource]="all" nzBordered nzSize="large">
      <li nz-list-item *ngFor="let item of all" nzNoFlex>
        <ul nz-list-item-actions>
        <nz-list-item-action>
        <a routerLink = "/contact/{{item.name}}">Edit Profile</a>
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
      <nz-tab nzTitle="Manager"><ul nz-list [nzDataSource]="managers" nzBordered nzSize="large">
      <li nz-list-item *ngFor="let item of managers" nzNoFlex> 
        <ul nz-list-item-actions ng-init = "itemArg = {item}">
        <nz-list-item-action>
          <a routerLink = "/contact/{{item.name}}">Edit Profile</a>
        </nz-list-item-action>
      </ul>
      <nz-avatar nzSize="small" nzIcon="user" class = "avatar" type></nz-avatar>
      {{item.email}}
      </li>
    </ul></nz-tab>
    /** comments for code block  24 - 33. The code is for the managers tab for the contacts page. line 31 creates a loop that will render all the data from the data array*/
  /** comments for code block  24 - 33. for examples on the ng zorro component that was used, check out their page  */
   /** https://ng.ant.design/components/tabs/en */
      <nz-tab nzTitle="Coaches"><ul nz-list [nzDataSource]="coaches" nzBordered nzSize="large">
    <li nz-list-item *ngFor="let item of coaches" nzNoFlex>
      <ul nz-list-item-actions>
      <nz-list-item-action>
      <a routerLink = "/contact/{{item.name}}">Edit Profile</a>
    </nz-list-item-action>
  </ul>
  <nz-avatar nzSize="small" nzIcon="user" class = "avatar" type></nz-avatar>
  {{item.email}}
    </li>
  </ul></nz-tab>
  /** this is the coaches tab. The anchor tag is necessary for routing to the profiles page*/
  /** when you click on it, it will send you to the */
      <nz-tab nzTitle="Advisors"><ul nz-list [nzDataSource]="advisors" nzBordered nzSize="large">
      <li nz-list-item *ngFor="let item of advisors" nzNoFlex>
        <ul nz-list-item-actions>
        <nz-list-item-action>
        <a routerLink = "/contact/{{item.name}}">Edit Profile</a>
      </nz-list-item-action>
    </ul>
    <nz-avatar nzSize="small" nzIcon="user" class = "avatar" type></nz-avatar>
    {{item.email}}
      </li>
    </ul></nz-tab>
    /** this is the advisors tab */
      <nz-tab nzTitle="Specialist"><ul nz-list [nzDataSource]="specialists" nzBordered nzSize="large">
    <li nz-list-item *ngFor="let item of specialists" nzNoFlex>
      <ul nz-list-item-actions>
      <nz-list-item-action>
      <a routerLink = "/contact/{{item.name}}">Edit Profile</a>
    </nz-list-item-action>
  </ul>
  <nz-avatar nzSize="small" nzIcon="user" class = "avatar" type></nz-avatar>
  {{item.email}}
    </li>
  </ul></nz-tab>
  /** this is the specialist tab */
      <nz-tab nzTitle="User">
      <ul nz-list [nzDataSource]="clients" nzBordered nzSize="large">
    <li nz-list-item *ngFor="let item of clients" nzNoFlex>
      <ul nz-list-item-actions>
        <nz-list-item-action>
          <a routerLink = "/contact/{{item.name}}">Edit Profile</a>
        </nz-list-item-action>
      </ul>
      <nz-avatar nzSize="small" nzIcon="user" class = "avatar" type></nz-avatar>
      {{item.email}}
    </li>
  </ul>
  </nz-tab>
  /** this is the User tab */
  <nz-tab nzTitle="Admin">
      <ul nz-list [nzDataSource]="admins" nzBordered nzSize="large">
    <li nz-list-item *ngFor="let item of admins" nzNoFlex>
      <ul nz-list-item-actions>
      <nz-list-item-action>
      <a routerLink = "/contact/{{item.name}}">Edit Profile</a>
    </nz-list-item-action>
  </ul>
  <nz-avatar nzSize="small" nzIcon="user" class = "avatar" type></nz-avatar>
  {{item.email}}
    </li>
  </ul>
  </nz-tab>
  /** this is the admin tab */
    </nz-tabset>
  
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


  constructor(public msg: NzMessageService, private http: HttpClient) { 
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