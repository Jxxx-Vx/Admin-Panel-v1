import { Component, OnInit } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'nz-demo-list-simple',
  template: ` <h3 [ngStyle]="{ margin: '16px 0' }">Large Size</h3>
  <nz-tabset>
        <nz-tab nzTitle="All">
        <ul nz-list [nzDataSource]="data" nzBordered nzSize="large">
      <li nz-list-item *ngFor="let item of data" nzNoFlex>
        <ul nz-list-item-actions>
          <nz-list-item-action>
          </nz-list-item-action>
        </ul>
        <a routerLink = "/contact/{{item}}">{{ item }}</a>
      </li>
    </ul>
  </nz-tab> 
  /** comments for code block  8 - 20. The code is for the all tab for the contacts page. line 11 creates a loop that will render all the data from the data array*/
  /** comments for code block  8 - 20. line 17 will render the elements in item in a ul or unordered list */

      <nz-tab nzTitle="Manager"><ul nz-list [nzDataSource]="managers" nzBordered nzSize="large">
      <li nz-list-item *ngFor="let item of managers" nzNoFlex> 
        <ul nz-list-item-actions ng-init = "itemArg = {item}">
          <nz-list-item-action>
            <a (click)="msg.info('edit')">edit</a>
          </nz-list-item-action>
        </ul>
        <a routerLink = "/contact/{{item}}"> {{ item }}</a> 
      </li>
    </ul></nz-tab>
    /** comments for code block  24 - 33. The code is for the managers tab for the contacts page. line 31 creates a loop that will render all the data from the data array*/
  /** comments for code block  24 - 33. for examples on the ng zorro component that was used, check out their page  */
   /** https://ng.ant.design/components/tabs/en */




      <nz-tab nzTitle="Coaches"><ul nz-list [nzDataSource]="coaches" nzBordered nzSize="large">
    <li nz-list-item *ngFor="let item of coaches" nzNoFlex>
      <ul nz-list-item-actions>
        <nz-list-item-action>
        </nz-list-item-action>
      </ul>
      <a routerLink = "/contact/{{item}}">{{ item }}</a>
    </li>
  </ul></nz-tab>

      <nz-tab nzTitle="Advisors"><ul nz-list [nzDataSource]="advisors" nzBordered nzSize="large">
      <li nz-list-item *ngFor="let item of advisors" nzNoFlex>
        <ul nz-list-item-actions>
          <nz-list-item-action>
          </nz-list-item-action>
        </ul>
        <a routerLink = "/contact/{{item}}">{{ item }}</a>
      </li>
    </ul></nz-tab>

      <nz-tab nzTitle="Specialist"><ul nz-list [nzDataSource]="specialists" nzBordered nzSize="large">
    <li nz-list-item *ngFor="let item of specialists" nzNoFlex>
      <ul nz-list-item-actions>
        <nz-list-item-action>
        </nz-list-item-action>
      </ul>
      <a routerLink = "/contact/{{item}}">{{ item }}</a>
    </li>
  </ul></nz-tab>

      <nz-tab nzTitle="User">
      <ul nz-list [nzDataSource]="data" nzBordered nzSize="large">
    <li nz-list-item *ngFor="let item of data" nzNoFlex>
      <ul nz-list-item-actions>
        <nz-list-item-action>
        </nz-list-item-action>
      </ul>
      <a routerLink = "/contact/{{item}}">{{ item }}</a>
    </li>
  </ul>
  </nz-tab>

  <nz-tab nzTitle="Admin">
      <ul nz-list [nzDataSource]="data" nzBordered nzSize="large">
    <li nz-list-item *ngFor="let item of data" nzNoFlex>
      <ul nz-list-item-actions>
        <nz-list-item-action>
        </nz-list-item-action>
      </ul>
      <a routerLink = "/contact/{{item}}">{{ item }}</a>
    </li>
  </ul>
  </nz-tab>

    </nz-tabset>

  
  `,
  styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit {
  showNav = false;
  data = [
    'Ryan',
    'Dave Marshall',
    'John Smith',
    'Michael Rodriguez',
    'Kevin Nguyen '
  ];
  managers = [
    'Ryan'
   
  ];
  coaches = [
    'Dave Marshall'
   
  ];
  advisors  = [
    'John Smith'
   
  ];
  specialists = [
    'Michael Rodriguez'
   
  ];
  constructor(public msg: NzMessageService) { }

  ngOnInit(): void {
  }

}
