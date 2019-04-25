import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { PostService } from "../post.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Post } from "../post.model";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  post: Post;
  private mode = "create";
  private id: string;
  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(""),
      content: new FormControl("")
    });

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      if (params.has("id")) {
        this.mode = "edit";
        this.id = params.get("id");
        this.postService.getOnePost(this.id).subscribe(responseData => {
          this.post = {
            _id: responseData.id,
            title: responseData.title,
            content: responseData.content
          };
        });
      } else {
        this.mode = "create";
        this.id = null;
      }
    });
  }

  onSubmit(title: string, content: string) {
    if (this.mode === "create") {
      this.postService.newPost(this.form.value.title, this.form.value.content);
    } else {
      this.postService.editPost(
        this.id,
        this.form.value.title,
        this.form.value.content
      );
    }
  }
}
