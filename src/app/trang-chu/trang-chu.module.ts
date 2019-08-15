import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TrangChuComponent } from "./trang-chu.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { HeaderComponent } from "./header/header.component";
import { LaptopComponent } from "./laptop/laptop.component";
import { ModalComponent } from "./modal/modal.component";
import { ProductItemComponent } from "./product-item/product-item.component";
import { PromotionComponent } from "./promotion/promotion.component";
import { SmartphoneComponent } from "./smartphone/smartphone.component";

@NgModule({
  declarations: [
    TrangChuComponent,
    CarouselComponent,
    HeaderComponent,
    LaptopComponent,
    ModalComponent,
    ProductItemComponent,
    PromotionComponent,
    SmartphoneComponent
  ],
  exports: [
    TrangChuComponent,
    CarouselComponent,
    HeaderComponent,
    LaptopComponent,
    ModalComponent,
    ProductItemComponent,
    PromotionComponent,
    SmartphoneComponent
  ],
  imports: [CommonModule]
})
export class TrangChuModule {}
