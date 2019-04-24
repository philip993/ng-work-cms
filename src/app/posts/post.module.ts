import { NgModule } from "@angular/core";

import { CreateComponent } from "./create/create.component";
import { ViewComponent } from "./view/view.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularMaterialModule } from "../angular-material.module";

@NgModule({
  declarations: [CreateComponent, ViewComponent],
  imports: [CommonModule, ReactiveFormsModule, AngularMaterialModule],
  exports: []
})
export class PostModule {}
