import { ProductComponent } from "./Product.component";
import {
    ProductFooterStartComponent,
    ProductFooterPriceComponent,
} from "./Product.footer.component";
import {
    ProductFooterComponent,
    ProductFooterTitleComponent,
} from "./Product.footer.component";
import {
    ProductHeaderComponent,
    ProductHeaderComponentButtons,
} from "./Product.header.component";
export const ProductCard = Object.assign(ProductComponent, {
    Header: ProductHeaderComponent,
    HeaderButtons: ProductHeaderComponentButtons,
    Footer: ProductFooterComponent,
    FooterTitle: ProductFooterTitleComponent,
    FooterStart: ProductFooterStartComponent,
    FooterPrice: ProductFooterPriceComponent,
});
