import { query } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { url } from 'inspector';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageService } from 'ng-zorro-antd/message';



@Component({
  selector: 'nz-demo-list-simple',
  template: `
  
  <h3 [ngStyle]="{ margin: '16px 0' }">Archived Accounts</h3>
  <nz-tabset>
      <nz-tab nzTitle="Archived"></nz-tab>

    </nz-tabset>
  <div class = "scroll">
    <ul nz-list [nzDataSource]="users" nzBordered nzSize="large">
    
      <nz-list-header class = "spacing">Archived</nz-list-header>
      <li nz-list-item *ngFor="let item of users" nzNoFlex>
        <ul nz-list-item-actions>
          <nz-list-item-action>
            <button class = "unarchive" (click)="unArchive(item._id)">Unarchive</button>
          </nz-list-item-action>
        </ul>
        <nz-avatar nzSize="small" nzIcon="user" class = "avatar" type></nz-avatar>
         {{ item.email }}
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  users: any[] = [];
  url = `http://localhost:3012/unarchive`;
  

  unArchive(ID: any){

    this.http.post(`http://localhost:3012/unarchive`, {"_id": ID}).toPromise().then(data =>{
      console.log('Testing http post request');
    });
    console.log('Testing unarchive function, id = ', ID);
    window.location.reload();
  }
  
  constructor(public msg: NzMessageService, private http: HttpClient) { 
    let url = `http://localhost:3012/see-user/archive`;
    this.http.get<any[]>(url).toPromise().then(data => {
      this.users = data;
    });
  }


  ngOnInit(): void {
  }

}
