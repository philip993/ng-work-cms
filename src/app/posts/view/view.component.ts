import { Component, OnInit } from "@angular/core";
import { Post } from "../post.model";
import { Subscription } from "rxjs";
import { PostService } from "../post.service";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"]
})
export class ViewComponent implements OnInit {
  posts: Post[] = [];
  private postSubscription: Subscription;
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.postSubscription = this.postService
      .getPostsUpdated()
      .subscribe((responseData: Post[]) => {
        this.posts = responseData;
      });
  }
}
