import { Component, OnInit } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageService } from 'ng-zorro-antd/message';



@Component({
  selector: 'nz-demo-list-simple',
  template: `
  
  <h3 [ngStyle]="{ margin: '16px 0' }">Archived Accounts</h3>
  <nz-tabset>
      <nz-tab nzTitle="Archived "></nz-tab>

    </nz-tabset>
  <div class = "scroll">
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
  </div>
  `,
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  data = [
    'Ryan',
    'Dave Marshall',
    'John Smith',
    'Michael Rodriguez',
    'Kevin Nguyen',
    'Brian',
    'Eric',
    'Stupid',
    'Ryan',
    'Dave Marshall',
    'John Smith',
    'Michael Rodriguez',
    'Kevin Nguyen',
    'Brian',
    'Eric',
    'Stupid',
    'Ryan',
    'Dave Marshall',
    'John Smith',
    'Michael Rodriguez',
    'Kevin Nguyen',
    'Brian',
    'Eric',
    'Stupid',
    'Ryan',
    'Dave Marshall',
    'John Smith',
    'Michael Rodriguez',
    'Kevin Nguyen',
    'Brian',
    'Eric',
    'Stupid',
    'Ryan',
    'Dave Marshall',
    'John Smith',
    'Michael Rodriguez',
    'Kevin Nguyen',
    'Brian',
    'Eric',
    'Stupid'
  ];
  constructor(public msg: NzMessageService) { }

  ngOnInit(): void {
  }

}
