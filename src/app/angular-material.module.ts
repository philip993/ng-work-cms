import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatFormFieldModule,
  MatButtonModule
} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class AngularMaterialModule {}
