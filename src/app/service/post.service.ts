import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../components/posts/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this._postsUrl);
  }

  getPost(id: number): Observable<IPost> {
    return this.http.get<IPost>(this._postsUrl + `/${id}`);
  }
}
