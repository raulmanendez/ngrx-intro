import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/post.model';
import { AppState } from 'src/app/store/app.state';
import { getPosts } from '../state/posts.selector';
import { deletePost } from '../state/posts.actions';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  posts$: Observable<Post[]>
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.posts$=this.store.select(getPosts);
  }

  onDeletePost(id:number) {
    if(confirm ('Are you sure ?')) {
      this.store.dispatch(deletePost( { id }));
    }
  }

}
