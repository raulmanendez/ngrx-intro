import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/post.model';
import { AppState } from 'src/app/store/app.state';
import { getPostCount, getPosts } from '../state/posts.selector';
import { deletePost, loadPosts } from '../state/posts.actions';
import { setLoader } from 'src/app/shared/state/shared.actions';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  posts$: Observable<Post[]>
  count$: Observable<number>
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.posts$=this.store.select(getPosts);
    this.count$=this.store.select(getPostCount);

    this.store.dispatch(loadPosts());
  }

  onDeletePost(id:string) {
    if(confirm ('Are you sure ?')) {
      this.store.dispatch(deletePost( { id }));
    }
  }

}
