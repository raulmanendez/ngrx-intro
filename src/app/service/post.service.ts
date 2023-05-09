import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from '../model/post.model';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(`https://ng-store-a4630-default-rtdb.firebaseio.com/posts.json`)
      .pipe(
        map((data) => {
          let posts = []
          for (let key in data) {
            posts.push({ ...data[key], id: key })
          }
          return posts;
        })
      );
  }

  addPost(data: Post): Observable<Post> {
    return this.http.post<Post>(`https://ng-store-a4630-default-rtdb.firebaseio.com/posts.json`, data)
  }

  updatePost(data: Post) {
    const post = { [data.id]: { title: data.title, description: data.description } }
    return this.http.patch(`https://ng-store-a4630-default-rtdb.firebaseio.com/posts.json`, post)
  }

  deletePost(id: string): Observable<any> {
    return this.http.delete(`https://ng-store-a4630-default-rtdb.firebaseio.com/posts/${id}.json`)
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`https://ng-store-a4630-default-rtdb.firebaseio.com/posts/${id}.json`);
  }
}
