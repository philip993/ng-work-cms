import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserService } from "../user.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit, OnDestroy {
  isLoading = true;
  private userSubscription: Subscription;
  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userSubscription = this.userService
      .getUserListner()
      .subscribe(response => {
        console.log(response);
      });
  }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.userService.createUser(form.value.email, form.value.password);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
