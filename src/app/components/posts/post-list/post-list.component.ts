import { Component } from '@angular/core';
import {IPost} from "../post";
import {Subscription} from "rxjs";
import {PostService} from "../../../service/post.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  cardHeader: string = 'Post list';

  private _posts: IPost[] = [];
  private _errMsgLoadPosts: string = '';
  private _subscribe!: Subscription;

  constructor(private service: PostService) {
  }

  ngOnInit(): void {
    this._subscribe = this.service.getPosts().subscribe({
      next: data => {
        this._posts = data;
      },
      error: err => this._errMsgLoadPosts = err
    });
  }

  ngOnDestroy(): void {
    this._subscribe.unsubscribe();
  }

  get posts(): IPost[] {
    return this._posts;
  }
}
