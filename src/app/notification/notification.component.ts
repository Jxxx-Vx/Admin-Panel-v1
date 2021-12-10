import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifs: any[] = [];
  
  constructor(public msg: NzMessageService, private http: HttpClient) { 
    let url = `http://localhost:3012/see-user/notification`;
    this.http.get<any[]>(url).toPromise().then(data => {
      this.notifs = data;
    });
  }

  ngOnInit(): void {
  }

}
