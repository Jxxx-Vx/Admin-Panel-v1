import { Component,Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  
  validateForm!: FormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      let { username, password } = this.validateForm.value;
      if(password == '12345' ){
        this.message.info('Login successful!');
       
        this.router.navigate(['/welcome']);//after the password is successful submit the form 
      }
      else{this.message.info('Login unsuccessful!');}
    } else {
      this.message.info('Login unsuccessful!');
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  createBasicMessage(): void {
  }

  constructor(private fb: FormBuilder, private router:Router,private message: NzMessageService) {

  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({//want to make it a pair because there could be duplicate passwords in the database
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
