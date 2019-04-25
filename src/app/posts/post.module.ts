import { NgModule } from "@angular/core";

import { CreateComponent } from "./create/create.component";
import { ViewComponent } from "./view/view.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularMaterialModule } from "../angular-material.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [CreateComponent, ViewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule
  ],
  exports: []
})
export class PostModule {}
