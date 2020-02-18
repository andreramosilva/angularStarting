import { Component, OnInit } from "@angular/core";
import { IProduct } from "./products";
import { ProductService } from "./product.service";

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  imageWidth = 50;
  imageMargin = 2;
  showImage: boolean = false;
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  //listFilter: string = 'cart';
  filteredProducts: IProduct[];
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.listFilter = "cart";
  }

  onRatingClicked(message: string): void {
    this.pageTitle = "Product list: " + message;
  }

  performFilter(filteredby: string): IProduct[] {
    filteredby = filteredby.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filteredby) !== -1
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    //this.products = this.productService.getProducts();
    this.productService.getProducts().subscribe({
      next: products => {
        (this.products = products), (this.filteredProducts = this.products);
      },
      error: err => (this.errorMessage = err)
    });
  }
}
