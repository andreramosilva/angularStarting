import { NgModule } from "@angular/core";
//import { CommonModule } from "@angular/common";
import { ProductDetailComponent } from "./product-detail.component";
import { convertToSpacesPipe } from "../shared/convert-to-spaces.pipe";
//import { StarComponent } from "../shared/star.component";
import { RouterModule } from "@angular/router";
//import { FormsModule } from "@angular/forms";
import { ProductDetailGuard } from "./product-detail.guard";
import { ProductListComponent } from "./product-list.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    ProductDetailComponent,
    convertToSpacesPipe,
    // StarComponent,
    ProductListComponent
  ],
  imports: [
    //CommonModule,
    //FormsModule,
    RouterModule.forChild([
      { path: "products", component: ProductListComponent },
      {
        path: "products/:id",
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class ProductModule {}
