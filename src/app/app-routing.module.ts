import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateComponent } from "./posts/create/create.component";
import { ViewComponent } from "./posts/view/view.component";

const routes: Routes = [
  { path: "create", component: CreateComponent },
  { path: "view", component: ViewComponent },
  { path: "edit/:id", component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
