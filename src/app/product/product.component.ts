import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  images: any[]=[];
  productsNumber: number = 0;
  readonly API_URL = 'https://api.github.com';
  ifSpinner: boolean = false;


get activeIndex(): number {
  return this._activeIndex;
}

set activeIndex(newValue) {
    if (this.images && 0 <= newValue && newValue <= (this.images.length - 1)) {
        this._activeIndex = newValue;
    }
}

_activeIndex: number = 2;

responsiveOptions:any[] = [
  {
      breakpoint: '1024px',
      numVisible: 5
  },
  {
      breakpoint: '768px',
      numVisible: 3
  },
  {
      breakpoint: '560px',
      numVisible: 1
  }
];
  constructor(private photoService: PhotoService,
              private http: HttpClient) { }


  ngOnInit(): void {
    this.photoService.getImages().then((images: any[] ) => this.images = images)
   
  }

next() {
    this.activeIndex++;
}

prev() {
    this.activeIndex--;
}

addProduct(){
  if(this.productsNumber<this.images.length)
    this.productsNumber++;
}

testAPI(){
  this.ifSpinner = true;
  this.addProduct();
   this.http.get<any[]>(`${this.API_URL}/users`)
    .subscribe((resp: any) =>{
      this.ifSpinner=false;
        console.log(resp);
    });
}
}
