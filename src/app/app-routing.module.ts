import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateComponent } from "./posts/create/create.component";
import { ViewComponent } from "./posts/view/view.component";
import { SignupComponent } from "./users/signup/signup.component";
import { LoginComponent } from "./users/login/login.component";

const routes: Routes = [
  { path: "create", component: CreateComponent },
  { path: "view", component: ViewComponent },
  { path: "edit/:id", component: CreateComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
