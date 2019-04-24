import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class PostService {
  posts: Post[] = [];
  post: Post;
  private postsUpdated = new Subject();

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.posts;
  }

  getPostsUpdated() {
    return this.postsUpdated.asObservable();
  }

  newPost(title: string, content: string) {
    const post = {
      title: title,
      content: content
    };
    this.posts.push(post);
  }
}
