import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/posts.selector';
import { Post } from 'src/app/model/post.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { updatePost } from '../state/posts.actions';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit,OnDestroy {
  
  post:Post
  postForm:FormGroup;
  postSubscription=new Subscription()

  constructor(
    private store:Store<AppState>,
    private route:ActivatedRoute,
    private router:Router) { }
  
  ngOnInit(): void {
    this.postSubscription=this.route.paramMap.subscribe(params => {
      const id=params.get('id');
      this.store.select(getPostById, {id}).subscribe(data => {
        this.post=data;
        this.createForm();
      })
    })
  }

  createForm() {
    this.postForm=new FormGroup({
      title : new FormControl(this.post.title, [Validators.required,Validators.minLength(6)]),
      description : new FormControl(this.post.description, [Validators.required,Validators.minLength(10)])
    });
  }

  getDescriptionErrors() {
    const descriptionControl=this.postForm.get('description');
    if(descriptionControl.touched && !descriptionControl.valid){
      if(descriptionControl.errors['required'])
        return 'Please enter description.'
      if(descriptionControl.errors['minlength'])
        return 'Please enter description of minimum 10 length.'
    }
    return ''
  }

  onUpdatePost() {
    if(this.postForm.invalid) return;

    let form:Post =this.postForm.value;
    form.id=this.post.id;

    this.store.dispatch(updatePost({post:form}))  
    this.router.navigate(['posts'])
  }

  ngOnDestroy(): void {
    if(this.postSubscription) this.postSubscription.unsubscribe();
  }

}
