import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loginStart } from '../state/auth.action';
import { setLoader } from 'src/app/shared/state/shared.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.loginForm = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required])
    })
  }

  onLogin() {
    console.log(this.loginForm.value)
    const email=this.loginForm.value.email;
    const password=this.loginForm.value.password;

    this.store.dispatch(setLoader({status:true}))
    this.store.dispatch(loginStart({ email,password }))
  }

}
