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
  
  edit2 = "hidden";
  edit3 = "hidden";
  

  edit1(){
    this.edit2 = "text";
    this.edit3 = "submit";
  }


  delete(ID: any){

    this.http.post(`http://localhost:3012/deleteNotification`, {"_id": ID}).toPromise().then(data =>{
      console.log('Testing http post request');
    });
    console.log('Deleting Notification, id = ', ID);
    //window.location.reload();
  }

  edit(msg1: any,msg2: any){
    this.http.post(`http://localhost:3012/see-user/editnotification`, {"msg": msg1, "msg2": msg2}).toPromise().then(data =>{
      console.log('Testing editing notification');
    });
    console.log('Testing notifications, msg = ', msg2);
    //window.location.reload();
  }
  
  add(msg: any){

  }

  constructor(public msg: NzMessageService, private http: HttpClient) { 
    let url = `http://localhost:3012/see-user/notification`;
    this.http.get<any[]>(url).toPromise().then(data => {
      this.notifs = data;
    });
  }



  ngOnInit(): void {
  }

}
