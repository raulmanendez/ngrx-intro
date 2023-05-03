import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setLoader } from 'src/app/shared/state/shared.actions';
import { AppState } from 'src/app/store/app.state';
import { signupStart } from '../state/auth.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm:FormGroup
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.signUpForm = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required])
    })
  }

  onSignup() {
    
    const email=this.signUpForm.value.email;
    const password=this.signUpForm.value.password;

    this.store.dispatch(setLoader({status:true}))
    this.store.dispatch(signupStart({ email,password }))
  }


}
