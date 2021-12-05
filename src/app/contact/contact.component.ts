import { Component, OnInit } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'nz-demo-list-simple',
  template: `
  
  <h3 [ngStyle]="{ margin: '16px 0' }">Large Size</h3>
  <nz-tabset>
        <nz-tab nzTitle="All ">
        <ul nz-list [nzDataSource]="data" nzBordered nzSize="large">
      <li nz-list-item *ngFor="let item of data" nzNoFlex>
        <ul nz-list-item-actions>
          <nz-list-item-action>
            <a (click)="msg.info('edit')">edit</a>
          </nz-list-item-action>
        </ul>
        {{ item }}
      </li>
    </ul>
  </nz-tab>

      <nz-tab nzTitle="Manager"><ul nz-list [nzDataSource]="data" nzBordered nzSize="large">
      <li nz-list-item *ngFor="let item of data" nzNoFlex>
        <ul nz-list-item-actions>
          <nz-list-item-action>
            <a (click)="msg.info('edit')">edit</a>
          </nz-list-item-action>
        </ul>
        {{ item }}
      </li>
    </ul></nz-tab>




      <nz-tab nzTitle="Coaches"><ul nz-list [nzDataSource]="data" nzBordered nzSize="large">
    <li nz-list-item *ngFor="let item of data" nzNoFlex>
      <ul nz-list-item-actions>
        <nz-list-item-action>
          <a (click)="msg.info('edit')">edit</a>
        </nz-list-item-action>
      </ul>
      {{ item }}
    </li>
  </ul></nz-tab>

      <nz-tab nzTitle="Advisors"><ul nz-list [nzDataSource]="data" nzBordered nzSize="large">
      <li nz-list-item *ngFor="let item of data" nzNoFlex>
        <ul nz-list-item-actions>
          <nz-list-item-action>
            <a (click)="msg.info('edit')">edit</a>
          </nz-list-item-action>
        </ul>
        {{ item }}
      </li>
    </ul></nz-tab>

      <nz-tab nzTitle="Specialist"><ul nz-list [nzDataSource]="data" nzBordered nzSize="large">
    <li nz-list-item *ngFor="let item of data" nzNoFlex>
      <ul nz-list-item-actions>
        <nz-list-item-action>
          <a (click)="msg.info('edit')">edit</a>
        </nz-list-item-action>
      </ul>
      {{ item }}
    </li>
  </ul></nz-tab>

      <nz-tab nzTitle="User">
      <ul nz-list [nzDataSource]="data" nzBordered nzSize="large">
    <li nz-list-item *ngFor="let item of data" nzNoFlex>
      <ul nz-list-item-actions>
        <nz-list-item-action>
          <a (click)="msg.info('edit')">edit</a>
        </nz-list-item-action>
      </ul>
      {{ item }}
    </li>
  </ul>
  </nz-tab>

    </nz-tabset>

  
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  data = [
    'Ryan',
    'Dave Marshall',
    'John Smith',
    'Michael Rodriguez',
    'Kevin Nguyen '
  ];
  constructor(public msg: NzMessageService) { }

  ngOnInit(): void {
  }

}
