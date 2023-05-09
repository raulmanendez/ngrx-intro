import { Component, OnInit } from '@angular/core';
import { PostState } from '../state/posts.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/post.model';
import { getPostById } from '../state/posts.selector';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  post:Observable<Post>
  constructor(private store:Store<PostState>) { }

  ngOnInit(): void {
    this.post=this.store.select(getPostById)
  }

}
