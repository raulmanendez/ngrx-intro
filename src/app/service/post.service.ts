import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from '../model/post.model';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(`https://ng-store-a4630-default-rtdb.firebaseio.com/posts.json`)
      .pipe(
        map((data) => {
          return data["data"];
        })
      );
  }
}
