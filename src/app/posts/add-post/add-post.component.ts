import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/posts.actions';
import { Post } from 'src/app/model/post.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  form:FormGroup
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.initForm();
  }

  initForm() {
    this.form=new FormGroup({
      title: new FormControl(null, [Validators.required,Validators.minLength(6)]),
      description: new FormControl(null, [Validators.required,Validators.minLength(10)])
    })
  }

  getDescriptionErrors() {
    const descriptionControl=this.form.get('description');
    if(descriptionControl.touched && !descriptionControl.valid){
      if(descriptionControl.errors['required'])
        return 'Please enter description.'
      if(descriptionControl.errors['minlength'])
        return 'Please enter description of minimum 10 length.'
    }
    return ''
  }

  onAddPost(){
    if(!this.form.valid)
      return
    let form:Post =this.form.value;

    this.store.dispatch(addPost({post:form}))  
    
  }

}
