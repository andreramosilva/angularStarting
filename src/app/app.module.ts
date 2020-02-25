import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
//import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
//import { ProductListComponent } from "./products/product-list.component";
//import { convertToSpacesPipe } from "./shared/convert-to-spaces.pipe";
//import { StarComponent } from "./shared/star.component";
//import { ProductDetailComponent } from "./products/product-detail.component";
import { ProductDetailGuard } from "./products/product-detail.guard";
import { WelcomeComponent } from "./home/welcome.component";
import { ProductModule } from "./products/product.module";

@NgModule({
  declarations: [
    AppComponent,
    //ProductListComponent,
    //convertToSpacesPipe,
    //StarComponent,
    // ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "welcome", component: WelcomeComponent },
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      { path: "**", redirectTo: "welcome", pathMatch: "full" }
    ]),
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
