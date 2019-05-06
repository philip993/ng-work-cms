import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.model";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class UserService {
  private userListener = new Subject<boolean>();
  constructor(private http: HttpClient, private router: Router) {}

  getUserListner() {
    return this.userListener.asObservable();
  }

  createUser(email: string, password: string) {
    const user: User = {
      email: email,
      password: password
    };
    this.http.post("http://localhost:3000/users/signup", user).subscribe(
      responseData => {
        this.router.navigateByUrl("/");
      },
      error => {
        this.userListener.next(false);
      }
    );
  }
}
