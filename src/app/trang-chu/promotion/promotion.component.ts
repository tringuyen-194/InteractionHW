import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-promotion",
  templateUrl: "./promotion.component.html",
  styleUrls: ["./promotion.component.scss"]
})
export class PromotionComponent implements OnInit {
  imgPromo = {
    img1: "assets/img/promotion_1.png",
    img2: "assets/img/promotion_2.png",
    img3: "assets/img/promotion_3.jpg"
  };
  constructor() {}

  ngOnInit() {}
}
