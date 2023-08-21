import { Component } from '@angular/core';
import {IPost} from "../post";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../../service/post.service";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  private _post!: Observable<IPost>;
  private _id!: number;

  header: string = 'Post Detail'

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: PostService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( ( p ) => this._id = p?.['id'] );
    this._post = this.service.getPost(this._id);
  }

  onBack(): void {
    this.router.navigate(['/posts']);
  }

  get post(): Observable<IPost> {
    return this._post;
  }
}
