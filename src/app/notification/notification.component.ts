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
  
  selectmsg = "";


  edit2 = "hidden";
  edit3 = "hidden";

  add1 = "hidden";
  add2 = "hidden";
  
  selectamsg(msg: any){
    this.selectmsg = msg;
    alert('Notification Selected');//will print on the screen notification selected
    console.log("The notification to be sent is: ", this.selectmsg)
  }

  add4(msg: any){
    this.http.post(`http://localhost:3012/addNotification`, {"msg": msg}).toPromise().then(data =>{
      console.log('Testing adding notification');
    });
    console.log('Adding notifications, msg = ', msg);
    window.location.reload();
  }


  add(msg: any){
    let checkboxes = document.getElementsByClassName('ant-checkbox-wrapper-checked');
    let levels = [];
    for(let i = 0;i<checkboxes.length; i++){
      levels.push(checkboxes[i].id);
    }
    this.http.post(`http://localhost:3012/addNotification1`, {"levels": levels, "msg": msg}).toPromise().then(data =>{
      console.log('Testing adding notification');
    });
    console.log('Adding notifications, msg = ', msg);
    //window.location.reload();
  }
  

  addMsg(){
    alert("Message sucessfuly sent");
    this.add(this.selectmsg);
  }

  edit1(){
    this.edit2 = "text";
    this.edit3 = "submit";
  }


  delete(ID: any){

    this.http.post(`http://localhost:3012/deleteNotification`, {"_id": ID}).toPromise().then(data =>{
      console.log('Testing http post request');
    });
    console.log('Deleting Notification, id = ', ID);
    window.location.reload();
  }

  edit(ID: any, msg: any){
    this.http.post(`http://localhost:3012/editNotification`, {"_id": ID, "msg": msg}).toPromise().then(data =>{
      console.log('Testing editing notification');
    });
    console.log('Testing notifications, msg = ', msg);
    window.location.reload();
  }
  
  add3(){
    this.add1 = "text";
    this.add2 = "submit";
  }

  constructor(public msg: NzMessageService, private http: HttpClient) { 
    let url = `http://localhost:3012/see-user/notification`;//basically gets the data from the database 
    this.http.get<any[]>(url).toPromise().then(data => {
      this.notifs = data;//sets the data from the database and puts it into this.notifs variable
    });
  }



  ngOnInit(): void {
  }

}
