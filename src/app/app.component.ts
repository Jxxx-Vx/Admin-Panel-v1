import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //template: '<app-sidebar></app-sidebar><nz-content> <div class="inner-content"><router-outlet></router-outlet></div></nz-content>'   
  
 
})


export class AppComponent{
  isCollapsed = false;  
  hide = "hidden";
  
}
