import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class PostService {
  posts: Post[] = [];
  post: Post;
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getPosts() {
    this.http
      .get<{ posts: Post[] }>("http://localhost:3000/posts")
      .subscribe(responseData => {
        this.posts = responseData.posts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostsUpdated() {
    return this.postsUpdated.asObservable();
  }

  newPost(title: string, content: string) {
    const post = {
      _id: null,
      title: title,
      content: content
    };
    this.http
      .post("http://localhost:3000/posts", post)
      .subscribe(responseData => {
        this.router.navigateByUrl("/view");
      });
  }

  deletePost(id: string) {
    /*
    this.http
      .delete("http://localhost:3000/posts/" + id)
      .subscribe(responseData => {
        this.getPosts();
      });
      */
    return this.http.delete("http://localhost:3000/posts/" + id);
  }

  getOnePost(id) {
    return this.http.get<{ id: string; title: string; content: string }>(
      "http://localhost:3000/posts/" + id
    );
  }

  editPost(id: string, title: string, content: string) {
    const post = {
      _id: id,
      title: title,
      content: content
    };
    this.http
      .put("http://localhost:3000/posts/" + id, post)
      .subscribe(responseData => {
        this.router.navigateByUrl("/view");
      });
  }
}
