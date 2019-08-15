import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.scss"]
})
export class ProductItemComponent implements OnInit {
  @Input() product;
  @Output() modalEvent = new EventEmitter();
  status: boolean = true;
  constructor() {}
  ngOnInit() {}
  callModal() {
    this.modalEvent.emit(this.product);
  }

  hideDes() {
    this.status = false;
  }
  showDes() {
    this.status = true;
  }
}
