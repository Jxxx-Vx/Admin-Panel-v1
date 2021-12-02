import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { url } from 'inspector';
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
    <ul nz-list [nzDataSource]="users" nzBordered nzSize="large">
      <nz-list-header>Header</nz-list-header>
      <li nz-list-item *ngFor="let item of users" nzNoFlex>
        <ul nz-list-item-actions>
          <nz-list-item-action>
            <a (click)="msg.info('edit')">edit</a>
          </nz-list-item-action>
        </ul>
        {{ item.spreadsheet }}
      </li>
      <nz-list-footer>Footer</nz-list-footer>
    </ul>
  </div>
  `,
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  users: any[] = [];
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
  constructor(public msg: NzMessageService, private http: HttpClient) { 
    let url = `http://test.helloiris.ai/api/clients`;
    this.http.get<any[]>(url).toPromise().then(data => {
      this.users = data;
    });
  }

  ngOnInit(): void {
  }

}
