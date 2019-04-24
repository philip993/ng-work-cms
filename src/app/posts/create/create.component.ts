import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { PostService } from "../post.service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(""),
      content: new FormControl("")
    });
  }

  onSubmit(title: string, content: string) {
    this.postService.newPost(this.form.value.title, this.form.value.content);
  }
}
