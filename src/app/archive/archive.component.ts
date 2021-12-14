import { query } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { url } from 'inspector';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageService } from 'ng-zorro-antd/message';



@Component({
  selector: 'nz-demo-list-simple',// template is where all the html code is 
  template: `
  
  <h3 [ngStyle]="{ margin: '16px 0' }">Archived Accounts</h3>
  <nz-tabset>
      <nz-tab nzTitle="Archived"></nz-tab>

    </nz-tabset>
  <div class = "scroll">
    <ul nz-list [nzDataSource]="users" nzBordered nzSize="large">
    
      <nz-list-header class = "spacing">Archived Level</nz-list-header>
      <li nz-list-item *ngFor="let item of users" nzNoFlex>
        <ul nz-list-item-actions>
          <nz-list-item-action>
            <button class = "unarchive" (click)="unArchive(item._id)">Restore User</button>
          </nz-list-item-action>
        </ul>
        
        <nz-avatar nzSize="small" nzIcon="user" class = "avatar" type></nz-avatar>
         {{ item.email }} <span style = "position: absolute; left:27%;">{{item.level}}</span>
         
      </li>
    </ul>
  </div>
  
  `,
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  users: any[] = [];
  httpHeaders = new HttpHeaders();
  
  unArchive(ID: any){
    
    this.http.post(`http://localhost:3012/unarchive`,{"_id": ID, "archive": "true"}).toPromise().then(data =>{
      console.log('Testing http post request:', data);
    });
    console.log('Testing unarchive function, id = ', ID);
    window.location.reload();
   
  }
  
  constructor(public msg: NzMessageService, private http: HttpClient) { 
    let url = `http://localhost:3012/see-user/archive`; // this is the url that needs to be run for the code to work
    this.http.get<any[]>(url).toPromise().then(data => {// make sure it is in the correct port 3012
      this.users = data; // this code basically just takes the sets the data from the url and stores it into data. Then it sets data to the component instance variable this.users
    });
  }


  ngOnInit(): void {
  }

}
