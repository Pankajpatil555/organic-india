import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-case',
  templateUrl: './product-case.component.html',
  styleUrls: ['./product-case.component.css']
})
export class ProductCaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  customOptions: any = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

}
