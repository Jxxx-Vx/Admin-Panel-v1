import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  admins: any[] = [];
  managers: any[] = [];
  specialists: any[] = [];
  advisors: any[] = [];
  coaches: any[] = [];
  clients: any[] = [];


  constructor(public msg: NzMessageService, private http: HttpClient) { 
    let url = `http://localhost:3012/see-user/admin`;
    this.http.get<any[]>(url).toPromise().then(data => {
      this.admins = data;
    });
    

    let url1 = `http://localhost:3012/see-user/manager`;
    this.http.get<any[]>(url1).toPromise().then(data => {
      this.managers = data;
    });
   

    let url2 = `http://localhost:3012/see-user/specialist`;
    this.http.get<any[]>(url2).toPromise().then(data => {
      this.specialists = data;
    });
   
    let url3 = `http://localhost:3012/see-user/advisor`;
    this.http.get<any[]>(url3).toPromise().then(data => {
      this.advisors = data;
    });

    let url4 = `http://localhost:3012/see-user/coach`;
    this.http.get<any[]>(url4).toPromise().then(data => {
      this.coaches = data;
    });

    let url5 = `http://localhost:3012/see-user/user`;
    this.http.get<any[]>(url5).toPromise().then(data => {
      this.clients = data;
    });
   
  }
  

  ngOnInit(): void{
    
  }

}
