import { Component, OnInit } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'nz-demo-list-simple',
  template: `
  
  <h3 [ngStyle]="{ margin: '16px 0' }">Large Size</h3>
  <nz-tabset>
      <nz-tab nzTitle="All ">Content of Tab Pane 1</nz-tab>
      <nz-tab nzTitle="Manager">Content of Tab Pane 2</nz-tab>
      <nz-tab nzTitle="Coaches">Content of Tab Pane 3</nz-tab>
      <nz-tab nzTitle="Advisors">Content of Tab Pane 4</nz-tab>
      <nz-tab nzTitle="Specialist">Content of Tab Pane 5</nz-tab>
      <nz-tab nzTitle="User">Content of Tab Pane 6</nz-tab>

    </nz-tabset>

  <ul nz-list [nzDataSource]="data" nzBordered nzSize="large">
    <nz-list-header>Header</nz-list-header>
    <li nz-list-item *ngFor="let item of data" nzNoFlex>
      <ul nz-list-item-actions>
        <nz-list-item-action>
          <a (click)="msg.info('edit')">edit</a>
        </nz-list-item-action>
      </ul>
      {{ item }}
    </li>
    <nz-list-footer>Footer</nz-list-footer>
  </ul>
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
