import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-smartphone",
  templateUrl: "./smartphone.component.html",
  styleUrls: ["./smartphone.component.scss"]
})
export class SmartphoneComponent implements OnInit {
  @Output() modalEvent = new EventEmitter();
  dtModal(event) {
    this.modalEvent.emit(event);
  }
  arrSmartPhone: any = [
    {
      name: "iPhone X",
      img: "assets/img/sp_iphoneX.png",
      des:
        "iPhone X features a new all-screen design. Face ID, which makes your face your password",
      price: "1000"
    },
    {
      name: "Galaxy Note7",
      img: "assets/img/sp_note7.png",
      des:
        "The Galaxy Note7 comes with a perfectly symmetrical design for good reason",
      price: "700"
    },
    {
      name: "Vivo",
      img: "assets/img/sp_vivo850.png",
      des:
        "A young global smartphone brand focusing on introducing perfect sound quality",
      price: "500"
    },
    {
      name: "Blackberry",
      img: "assets/img/sp_blackberry.png",
      des:
        "BlackBerry is a line of smartphones, tablets, and services originally designed",
      price: "400"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
